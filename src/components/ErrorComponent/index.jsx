import React from 'react';
import Head from '../Head';
import { Message } from './styles';

const ErrorComponent = () => (
  <>
    <Head title="Error" />
    <Message>Something it&apos;s wrong, please try again!</Message>
  </>
);

export default ErrorComponent;
