export const buildFilterQuery = (filters: Record<string, unknown>) => {
  return Object.entries(filters).reduce<Record<string, unknown>>((query, [key, value]) => {
    if (typeof value === 'string') {
      const normalizedValue = value.trim();

      if (!normalizedValue || normalizedValue.toLowerCase() === 'all') {
        return query;
      }

      query[key] = normalizedValue;
      return query;
    }

    if (Array.isArray(value)) {
      const normalizedValues = value
        .map((item) => (typeof item === 'string' ? item.trim() : String(item)))
        .filter((item) => item.length > 0 && item.toLowerCase() !== 'all');

      if (normalizedValues.length > 0) {
        query[key] = normalizedValues.join(',');
      }

      return query;
    }

    if (value !== null && value !== undefined) {
      query[key] = value;
    }

    return query;
  }, {});
};
