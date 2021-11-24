// @ts-nocheck

import ReactDOM from 'react-dom';
import React from 'react';
import { Client } from 'ketting';
import { KettingProvider } from 'react-ketting';

import './index.css';
import TodoListWrapper from './components/TodoListWrapper'

const client = new Client('http://localhost:8080');

const App = () => (
  <KettingProvider client={client}>
    <TodoListWrapper />
  </KettingProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));