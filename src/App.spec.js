import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App from './App';

jest.mock('./Child', () => 'MockedChild');


describe('App', () => {
   it('renders the mocked child with ReactDOM', () => {
       let div = document.createElement('div');
       div.id = 'root';
       document.body.appendChild(div);
       ReactDOM.render(<App />, div);

       console.log(document.body.innerHTML);

       expect(document.body.innerHTML).toEqual(expect.stringContaining('mockedchild'));
       div.remove();
   });

   it('renders the mocked child with Enzyme', () => {
       const wrapper = mount(
           <App />
       );

       console.log(wrapper.html());

       expect(wrapper.html()).toEqual(expect.stringContaining('mockedchild'));
   })
});
