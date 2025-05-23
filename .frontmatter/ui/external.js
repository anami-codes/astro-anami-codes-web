import {
  enableDevelopmentMode,
  registerCardImage,
  registerCardFooter,
  registerPanelView,
  registerCustomField
} from "https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm";

registerCardFooter(async (filePath, metadata) => {
  return `<span>Your HTML for the card footer</span>`;
});

