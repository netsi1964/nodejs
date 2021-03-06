/*global $, localStorage, angular, alert, document, console, require */
/*jshint unused:false */

var jsdom = require("jsdom").jsdom;

var pages = ['/TemplateTags/Dynamicweb-template-tags/General-tags.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/DwTemplateTags.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/Date/time-tag-extensions.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/Global-template-tags.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/Include(Path).aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/Loops.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/If-Defined.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/If-LoopDefined.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/If-statements.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/Server-Request.aspx',
  '/TemplateTags/Dynamicweb-template-tags/General-tags/Snippet.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Designs-and-layouts.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Designs-and-layouts/Location.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Designs-and-layouts/Description(text).aspx',
  '/TemplateTags/Dynamicweb-template-tags/Designs-and-layouts/Title(text).aspx',
  '/TemplateTags/Dynamicweb-template-tags/Page-tags.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Page-tags/Master-page.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Page-tags/Page.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Page-tags/Page-property.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Page-tags/Page-validation.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/Item-FieldSystemName.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/Item-Area-FieldSystemName.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphID.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphHeader.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphImage.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphImageClean.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphImageHAlign.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphImageVAlign.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphModule.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphText.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphSetup.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphImageText.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Paragraph-tags/ParagraphImageLinkAlt.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Audit.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Calendar.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Calendar-v2.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Data-Lists.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Dealer-Search.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/eCards.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/E-mail-Marketing.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Extranet/Intranet.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Extranet/Intranet--Extended.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Extranet--Extended-(DW-7).aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/FAQ.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/File-Publishing.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Forms.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Forms-(DW-7).aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Forum.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Forum-v2.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Gallery.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Image-Gallery.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/iPaper.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Item-publisher.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Media-Database.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/News.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/News-v2.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Newsletter--Extended.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Newsletter-v3.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Notification.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Password.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Poll.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Product-Catalog.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Related-links.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/RSS.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Search-v1.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Shopping-Cart.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Sitemap.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Statistics-Extended.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Templates.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Users.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Weblog.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Workflow.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Module-tags/Copy-of-Audit.aspx',
  '/TemplateTags/Dynamicweb-template-tags/Related-documentation.aspx'];

var pages = ["http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Extentions.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/Childgroups.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/CustomFieldList.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/CustomGroupFields.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/EcomProductList-Pages.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/EcomSearch-Filters.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/ProductGroups.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/Products.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/Subgroups.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-list/Loops/Taxes.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/AssociatedGroups.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/BOMConfigurators.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/BOMProducts.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/CustomFieldList.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/CustomFields.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/Details.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/GroupFields.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/OrderContexts.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/ProductCategories.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/ProductDiscounts.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/ProductGroups.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/Product-OrderLineFields.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/ProductRelatedGroups.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/Units.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/VariantCombinations.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/VariantGroups.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/Comments.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/eComRelated-MostPopularProducts.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tag…oduct-Catalog/Product-detail/Loops/eComRelated-WhatAboutTheseProducts.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tag…t-Catalog/Product-detail/Loops/eComRelated-CustomersWhoSawThisAlsoSaw.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tag…Product-detail/Loops/eComRelated-CustomersWhoBoughtThisItemAlsoBought.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tag…uct-Catalog/Product-detail/Loops/eComRelated-YouHaveSeenTheseProducts.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/Loops/Taxes.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Search.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart/Order/Cart.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart/Order/Cart/Gateway.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart/Order/Cart/Loops/Countries.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart/Order/Cart/Loops/Orderlines.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart/Order/Cart/Loops/Paymethods.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart/Order/Cart/Loops/Shippingmethods.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart/Order/Cart/Loops/ValidationErrors.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/AddressValidators.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/Countries.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/eComRelated-SavedForLater.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/MissingProducts.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/Orderlines.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/Paymethods.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/StepButtons.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/Shippingmethods.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/ShippingTaxes.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/ShippingTaxesGrouped.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/StepButtons-1.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/TaxProviderErrors.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/Order/Cart/Loops/ValidationErrors.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Shopping-Cart-V2/CheckOutHandler.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center/Menu-layout.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center/Order-list.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center/Order-details.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center/Order-search.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center/Favorites-list.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center/Specify-e-mail.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Customer-Center/Order-e-mail.aspx",
"http://templates.dynamicweb.com/eCommerce/Dynamicweb-eCommerce-template-tags/Product-Catalog/Product-detail/ProductSheetURL.aspx"];

var links = [];
var linkContainerSelector = "#leftmenu a";
var iPage = pages.length - 1;
var sRoot = "http://templates.dynamicweb.dk";

// Count all of the links from the Node.js build page
function getLinks(pages, links, fCallback) {
	var sURL = sRoot + pages[iPage];
	console.info("You asked me to fetch: " + sURL);
	jsdom.env(
		sURL, ["http://code.jquery.com/jquery.js"], // We will include jQuery
		function (errors, window) {
			window.$(linkContainerSelector).each(function () {
				var sHref = window.$(this).attr("href");
				if (links.indexOf(sHref) === -1) {
					links.push(sHref);
				}
			});
			console.log(iPage);
			if (--iPage > 0) {
				getLinks(pages, links, fCallback);
				fCallback.call();
			} else {
				fCallback.call();
			}
		}
	);

}

getLinks(pages, links, function () {
	console.log(links);
});