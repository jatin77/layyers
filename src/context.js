import React, { Component, createContext } from 'react';
import { ourProducts } from '../src/data';
export const ShopContext = createContext();

export class ContextProvider extends Component {
  state = {
    productsSlug: '',
    cart: [],
    productsList: [],
    detailProduct: null,
    toggleClicked: false,
    sideToggleSecond: false,
    sideToggleFirst: false,
    sideToggleThird: false,
    sideToggleFourth: false,
    sideToggleFifth: false,
    footerToggledFirst: false,
    footerToggleSecond: false,
    displayOverlay: false,
    subTotal: 0,
    tax: 0,
    total: 0
  };
  toggleHandle = () => {
    this.setState({
      toggleClicked: !this.state.toggleClicked,
      displayOverlay: !this.state.displayOverlay
    });
  };
  navClicked = e => {
    let target = e.target.getAttribute('data-product-type');

    switch (target) {
      case 'sleepingBag':
        this.setState({
          productsList: ourProducts
        });
        break;

      case 'bags&backpacks':
        this.setState({
          productsList: ourProducts
        });
        break;

      case 'tents':
        this.setState({
          productsList: ourProducts
        });
        break;

      default:
        return;
    }
  };
  // sideNavClicked = e => {
  //   let sideDropIcon = e.target.getAttribute('data-type-name');
  //   switch (sideDropIcon) {
  //     case 'sideDropIcon1':
  //       let targetElOne = e.target;
  //       let parentElOne = targetElOne.parentElement;
  //       let dropElOne = parentElOne.nextSibling;
  //       dropElOne.classList.toggle('show');
  //       this.setState({
  //         sideToggleFirst: !this.state.sideToggleFirst
  //       });

  //       break;
  //     case 'sideDropIcon2':
  //       let targetElTwo = e.target;
  //       let parentElTwo = targetElTwo.parentElement.parentElement;
  //       let dropElTwo = parentElTwo.nextSibling;
  //       dropElTwo.classList.toggle('show');
  //       this.setState({
  //         sideToggleSecond: !this.state.sideToggleSecond
  //       });
  //       break;
  //     case 'sideDropIcon3':
  //       let targetElThree = e.target;
  //       let parentElThree = targetElThree.parentElement.parentElement;
  //       let dropElThree = parentElThree.nextSibling;
  //       dropElThree.classList.toggle('show');
  //       this.setState({
  //         sideToggleThird: !this.state.sideToggleThird
  //       });
  //       break;
  //     case 'sideDropIcon4':
  //       let targetElFourth = e.target;
  //       let parentElFourth = targetElFourth.parentElement.parentElement;
  //       let dropElFourth = parentElFourth.nextSibling;
  //       dropElFourth.classList.toggle('show');
  //       this.setState({
  //         sideToggleFourth: !this.state.sideToggleFourth
  //       });
  //       break;
  //     case 'sideDropIcon5':
  //       let targetElFifth = e.target;
  //       let parentElFifth = targetElFifth.parentElement.parentElement;
  //       let dropElFifth = parentElFifth.nextSibling;
  //       dropElFifth.classList.toggle('show');
  //       this.setState({
  //         sideToggleFifth: !this.state.sideToggleFifth
  //       });
  //       break;
  //     default:
  //       return;
  //   }
  // };
  footerTabClicked = e => {
    let dropIcon = e.target.getAttribute('data-type-name');
    if (dropIcon === 'dropFooterIcon1') {
      let targetEl = e.target;
      let parentEl = targetEl.parentElement;
      let dropEl = parentEl.nextSibling;
      dropEl.classList.toggle('show');
      this.setState({
        footerToggledFirst: !this.state.footerToggledFirst
      });
    }
    if (dropIcon === 'dropFooterIcon2') {
      let targetEl = e.target;
      let parentEl = targetEl.parentElement;
      let dropEl = parentEl.nextSibling;
      dropEl.classList.toggle('show');
      this.setState({
        footerToggledSecond: !this.state.footerToggledSecond
      });
    }
  };
  getProducts = () => {
    return this.state.productsList;
  };
  getDetails = id => {
    let tempProducts = this.state.productsList;
    if (tempProducts.length > 0) {
      this.setState({
        detailProduct: tempProducts.filter(product => product.id === id)
      });
    }
  };
  addToCart = id => {
    let tempProducts = [...this.state.productsList];
    let product = tempProducts.filter(product => product.id === id);
    product[0].inCart = true;
    product[0].count = 1;
    const price = product[0].price;

    product[0].total = price;

    this.setState(
      () => {
        return {
          cart: [...this.state.cart, product],
          productsList: tempProducts
        };
      },
      () => this.addTotals()
    );
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    let product = tempCart.find(item => item[0].id === id);

    product[0].count += 1;
    product[0].total = product[0].price * product[0].count;
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    let product = tempCart.find(item => item[0].id === id);
    product[0].count -= 1;

    if (product[0].count === 0) {
      this.removeItem(id);
    } else {
      product[0].total = product[0].price * product[0].count;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item[0].id !== id);

    let tempProducts = [...this.state.productsList];
    let product = this.state.productsList.find(item => item.id === id);

    product.count = 0;
    product.total = 0;
    product.inCart = false;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          productsList: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item[0].total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return { subTotal: subTotal, tax: tax, total: total };
    });
  };
  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          toggleHandle: this.toggleHandle,
          navClicked: this.navClicked,
          sideNavClicked: this.sideNavClicked,
          footerTabClicked: this.footerTabClicked,
          getDetails: this.getDetails,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ContextProvider;
