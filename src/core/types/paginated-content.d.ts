interface PaginatedContent<T = Record<string, unknown>> extends PaginationModel {
  items: T[];
}
