export function searchDB(query) {
  return $.ajax({
    method: "GET",
    url: "api/searches",
    data: { search: { query } }
  });
}

export function featured(num) {
  return $.ajax({
    method: "GET",
    url: `api/searches/${num}`
  });
}