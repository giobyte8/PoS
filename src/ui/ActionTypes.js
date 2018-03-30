const ActionTypes = {
  BRANDS: {
    PAGE: 'brands/page',
  },
  MEASUREMENT_UNITS: {
    PAGE: 'measurement_units/page',
  },
  PRODUCTS: {
    PAGE: 'products/page',
  },
  PROVIDERS: {
    LIST: 'providers/list',
    PAGE: 'providers/page',
  },
  PURCHASE: {
    ADD_CONTENT: 'purchase/add_content',
    CHANGE_PAYMENT_AS_REINVESTMENT: 'purchase/change_reinvestment',
    CHANGE_PAYMENT_AS_INVESTMENT: 'purchase/change_investment',
    CHANGE_DATE: 'purchase/change_date',
    SAVE: 'purchase/save',
    SET_REDIRECT_AS_COMPLETED: 'purchase/set_redirect_as_completed'
  },
  PURCHASE_PRICES: {
    FETCH_P_MODEL: 'purchase_prices/fetch_p_model'
  }
};

export default ActionTypes;
