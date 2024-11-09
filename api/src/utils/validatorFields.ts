import { Category } from '../entities/Category.entity';
import { Promotion } from '../entities/Promotion.entity';

const checkField = (
  valueField: object,
  expectedValue: string
): string | null => {
  const val = Object.values(valueField)[0];

  if (typeof val !== expectedValue) {
    return `the field ${Object.keys(
      valueField
    )} has an incorrect type; the expected value is ${expectedValue}`;
  }
  return null;
};

const checkFieldEnum = (
  valueField: object,
  arrayDB: Category[] | Promotion[]
): string | null => {
  const val = Object.values(valueField)[0];
  const arrayTransformed = arrayDB.map(index => {
    return Object.values(index)[0];
  });
  if (!arrayTransformed.includes(val)) {
    return `the field ${Object.keys(
      valueField
    )} has an incorrect; please send a valid value ${arrayTransformed}`;
  }
  return null;
};

const checkImgUrl = (nameField: string, imgUrl: unknown): string | null => {
  if (typeof imgUrl !== 'object' || imgUrl === null) {
    return `the field ${nameField} must be an object`;
  }
  if (!('full' in imgUrl) || !('medium' in imgUrl)) {
    return `the field ${nameField} is missing required properties: full, medium`;
  }
  const fullImgUrl = (imgUrl as { full: unknown }).full;
  const mediumImgUrl = (imgUrl as { medium: unknown }).medium;
  if (typeof fullImgUrl !== 'string' || typeof mediumImgUrl !== 'string') {
    return `the field ${nameField} properties must be strings`;
  }
  return null;
};
export default { checkField, checkFieldEnum, checkImgUrl };
