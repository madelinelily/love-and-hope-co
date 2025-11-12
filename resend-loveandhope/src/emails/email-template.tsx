import * as React from 'react';

interface EmailTemplateProps {
  sender: string,
  state: string,
  county?: string,
  weddingType: string,
  subject: string,
  message: string,
}

export function EmailTemplate({ sender, state, county, weddingType, subject, message }: EmailTemplateProps) {
  return (
    <div>
      Contacted by: {sender}
      <br/>
      <br/>
      State: {state}
      <br/>
      County: {county}
      <br/>
      <br/>
      Wedding Package: {weddingType}
      <br/>
      <br/>
      Subject: {subject}
      <br/>
      Message: {message}
    </div>
  );
}

export default EmailTemplate;