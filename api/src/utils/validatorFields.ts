const checkField = (
  valueField: unknown,
  expectedValue: string
): string | null => {
  const obj = { valueField };
  if (typeof valueField !== expectedValue) {
    return `the field ${Object.keys(
      obj
    )} has an incorrect type; the expected value is ${expectedValue}`;
  }
  return null;
};

const checkFieldEnum = <T extends Record<string, unknown>>(
  valueField: unknown,
  enumType: T
): string | null => {
  const obj = { valueField };
  if (!Object.values(enumType).includes(valueField)) {
    return `the field ${Object.keys(
      obj
    )} has an incorrect; please send a valid value ${Object.values(
      enumType
    ).join(', ')}`;
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
