export default function ListView(
  data: readonly any[],
  page: number,
  perPage: number,
  totalCount: number
) {
  return {
    data,
    meta: {
      page,
      perPage,
      maxPage: Math.ceil(totalCount / perPage),
      totalCount,
    },
  };
}
