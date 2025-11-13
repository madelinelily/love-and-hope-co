import './reviewwidget.css';

const ReviewWidgetMobile = () => {

    fetch('https://www.weddingwire.com/widget/vendors/reviews?id=1996439')
    .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  .then((stream) => new Response(stream, {headers: {"content-type": "text/html"}})
  .text().then(text => {
    const weddingWireWidgetDiv = document.getElementsByClassName('weddingwire-widget-div');
    weddingWireWidgetDiv[0].innerHTML = text;
  }));


    return(
        <div className="widget-container">
		    <style>
                @import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Serif+Text:ital@0;1&family=MonteCarlo&display=swap');
            </style>
            <div className="weddingwire-widget-div">

            </div>
	    </div>
	);}

export default ReviewWidgetMobile;