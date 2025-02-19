import aboutUs from '@/locales/en-US/aboutUs';
import common from '@/locales/en-US/common';
import lessor from '@/locales/en-US/lessor';
import lessorBreadCrumbs from '@/locales/en-US/lessor-breadcrumbs';
import login from '@/locales/en-US/login';
import menu from '@/locales/en-US/menu';
import {
  productCategories,
  productCharacteristicsLabel,
  productLocale,
  productMortgage,
  productReqDocs,
  productSurchage,
  productPage,
  productInsurance,
  productPolicies,
  productInsurace,
} from '@/locales/en-US/product';
import register from '@/locales/en-US/register';
import store from '@/locales/en-US/store';

export default {
  'nav.Home': 'Landing Page',
  'nav.Store': 'Rental',
  'nav.AboutUs': 'AboutUs',
  ...productLocale,
  ...productCategories,
  ...productCharacteristicsLabel,
  ...productPage,
  ...productMortgage,
  ...productPolicies,
  ...productReqDocs,
  ...productInsurace,
  ...productInsurance,
  ...productSurchage,
  ...lessorBreadCrumbs,
  ...aboutUs,
  ...menu,
  ...login,
  ...register,
  ...store,
  ...lessor,
  ...common,
};
