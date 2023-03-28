import { parsePageId } from "notion-utils";

export function getPageTitle(pageId = "", blockMap = {}) {
  return blockMap[parsePageId(pageId)].value.properties.title[0][0];
}
