export interface torreQuery {
  query: String;
  identityType: String;
  meta: boolean;
  limit: Number;
  torreGgId: String;
  excludeContacts: boolean;
  excludedPeople: String[];
}
