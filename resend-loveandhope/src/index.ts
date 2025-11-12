import { Resend } from 'resend';
import { EmailTemplate } from './emails/email-template';

export default {
  async fetch(request): Promise<Response> {

    
      /**
     * rawHtmlResponse returns HTML inputted directly
     * into the worker script
     * @param {string} html
     */
    // function rawHtmlResponse(html: BodyInit | null | undefined) {
    //   return new Response(html, {
    //     headers: {
    //       "content-type": "text/html;charset=UTF-8",
    //     },
    //   });
    // }


    /**
     * readRequestBody reads in the incoming request body
     * Use await readRequestBody(..) in an async function to get the string
     * @param {Request} request the incoming request to read from
     */
    interface Info {
      email:string,
      state:string,
      county:string,
      type:string,
      subject:string,
      body:string
    }
    async function handleRequest(request: Request) {
      const body:Info = await request.json()
      if(body.email === null ){
        return "ERROR";
      }
      const resend = new Resend('re_F9wTmP19_LUYSomK6p3LaYBsoWsNj5NZ3');

        const data = await resend.emails.send({
          from: 'Love and Hope <contact@loveandhope.co>',
          to: ['withloveandhopeco@gmail.com'],
          subject: 'You have a new submission!',
          react: EmailTemplate({sender:body.email, state:body.state, county:body.county, weddingType:body.type, subject:body.subject, message:body.body}),
        });

      return "Success!"
    }

    const { url } = request;
    if (request.method === "POST") {
      var success = await handleRequest(request);
      const op = { status: 200 };
      return new Response(`${success}`, op);
    } else if (request.method === "GET") {
      return new Response("The request was a GET");
    }
    return(new Response("you really should not be here"));
  },
} satisfies ExportedHandler<Env, ExecutionContext>;