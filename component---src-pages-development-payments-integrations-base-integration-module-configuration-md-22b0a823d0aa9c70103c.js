"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[99759],{2454:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return r},default:function(){return x}});var t=o(87462),m=o(45987),a=(o(35776),o(3905)),d=o(91515),l=o(89290);const i=["components"],r={},u=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var p;const s={_frontmatter:r},c=d.Z;function x(e){let{components:n}=e,o=(0,m.Z)(e,i);return(0,a.mdx)(c,(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(l.Z,{mdxType:"Docs"}),(0,a.mdx)("h1",{id:"payment-method-module-configuration"},"Payment method module configuration"),(0,a.mdx)("p",null,"For the sake of compatibility, upgradability and easy maintenance, do not edit the default Adobe Commerce code; add your customizations in a separate module."),(0,a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"You can use the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2-samples/tree/master/sample-module-payment-gateway"},"sample Magento_SamplePaymentGateway module")," files as the basis for your custom module structure and files. However, be aware that this code is NOT supported."),(0,a.mdx)("h2",{id:"specify-your-module-dependencies"},"Specify your module dependencies"),(0,a.mdx)("p",null,"Your custom payment integration module must have at least the following dependencies:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Magento_Sales module: to be able to get order details")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Magento_Payment module: to use the Commerce payment provider gateway infrastructure")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Magento_Checkout module: to be able to add the new payment method to checkout. If you do not plan to use it on the storefront checkout, this dependency is not required."))),(0,a.mdx)("p",null,"Specify these dependencies in your ",(0,a.mdx)("inlineCode",{parentName:"p"},"composer.json")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"module.xml")," files."),(0,a.mdx)("h3",{id:"composerjson"},(0,a.mdx)("inlineCode",{parentName:"h3"},"composer.json")),(0,a.mdx)("p",null,"In your ",(0,a.mdx)("inlineCode",{parentName:"p"},"%Vendor_Module%/composer.json")," file, specify the dependencies like in the following example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "require": {\n        ...\n        "magento/module-payment": "100.1.*",\n        "magento/module-checkout": "100.1.*",\n        "magento/module-sales": "100.1.*",\n        ...\n    },\n    ...\n\n}\n')),(0,a.mdx)("p",null,"For details about composer.json see ",(0,a.mdx)("a",{parentName:"p",href:"../../build/composer-integration.md"},"The composer.json")," file topic."),(0,a.mdx)("h3",{id:"modulexml"},(0,a.mdx)("inlineCode",{parentName:"h3"},"module.xml")),(0,a.mdx)("p",null,"Add the same dependencies in ",(0,a.mdx)("inlineCode",{parentName:"p"},"%Vendor_Module%/etc/module.xml")," like in the following example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">\n    <module name="Vendor_Module" setup_version="2.0.0">\n        <sequence>\n            ...\n            <module name="Magento_Sales"/>\n            <module name="Magento_Payment"/>\n            <module name="Magento_Checkout"/>\n            ...\n        </sequence>\n    </module>\n</config>\n')),(0,a.mdx)("p",null,"Your payment method implementation might require adding more dependencies."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-base-integration-module-configuration-md-22b0a823d0aa9c70103c.js.map