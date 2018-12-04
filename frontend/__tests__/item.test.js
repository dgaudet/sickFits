import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  title: 'A cool Item',
  price: 4000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
}

describe('<Item/>', () => {
  // it('renders and displays image properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>);
  //   const img = wrapper.find('img');
  //
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);
  // });
  //
  // it('renders and displays price tag and title', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>);
  //   const priceTag  = wrapper.find('PriceTag');
  //   const title = wrapper.find('Title a');
  //
  //   expect(priceTag.children().text()).toBe('$50');
  //   expect(title.text()).toBe(fakeItem.title);
  // });
  //
  // it('renders buttons properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>);
  //   const buttonList = wrapper.find('.buttonList');
  //
  //   expect(buttonList.children()).toHaveLength(3);
  //   expect(buttonList.find('Link')).toHaveLength(1);
  //   expect(buttonList.find('AddToCart')).toHaveLength(1);
  //   expect(buttonList.find('DeleteItem')).toHaveLength(1);
  // });

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
