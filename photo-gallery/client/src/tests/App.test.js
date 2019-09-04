import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';
import React from 'react';

describe('Photo Gallery', () => {
  const photos = [
    {
        "id": 1,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/2.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 2,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/5.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 3,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/5.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 4,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/2.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 5,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/1.jpg",
        "propertyListing_id": 1
    }
  ]

  const description={id: 1, property_description: "quod a nam"}

  const wrapper = shallow(<App photos={photos}/>)

  it('displays images', () => {
    expect(wrapper.contains(<img src="https://bnbair.s3-us-west-1.amazonaws.com/2.jpg"/>)).toEqual(true);
  })

  it('toggles Modal on and off', () => {
    const wrapper = mount(<App description={description} photos={photos}/>)
    wrapper.find('[data-test="view-modal"]').simulate('click');
    expect(wrapper.state().toggleModal).toEqual(true);
    wrapper.find('[data-test="hide-modal"]').simulate('click');
    expect(wrapper.state().toggleModal).toEqual(false);
  })
})
