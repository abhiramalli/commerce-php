"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[40433],{51262:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return u}});var t=n(87462),o=n(45987),m=(n(35776),n(3905)),r=n(91515),d=n(89290);const i=["components"],p={},l={_frontmatter:p},c=r.Z;function u(e){let{components:a}=e,n=(0,o.Z)(e,i);return(0,m.mdx)(c,(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)(d.Z,{mdxType:"Docs"}),(0,m.mdx)("h1",{id:"gateway-command-pool"},"Gateway Command Pool"),(0,m.mdx)("p",null,"All ",(0,m.mdx)("a",{parentName:"p",href:"/commerce-php/gateway-command.md"},"gateway commands")," implemented for a particular payment provider, should be added to a command pool for this provider. A command pool is a set of gateway commands available for integration with a particular payment provider. The pool is added to the configuration of the payment provider using ",(0,m.mdx)("a",{parentName:"p",href:"../../components/dependency-injection.md"},"dependency injection"),"."),(0,m.mdx)("h2",{id:"interface"},"Interface"),(0,m.mdx)("p",null,"The basic interface for a command pool is ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Command/CommandPoolInterface.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Payment\\Gateway\\Command\\CommandPoolInterface")),". It implements the ",(0,m.mdx)("a",{parentName:"p",href:"https://designpatternsphp.readthedocs.io/en/latest/Creational/Pool/README.html"},"Pool pattern")),(0,m.mdx)("h2",{id:"default-implementation"},"Default implementation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Command/CommandPool.php"},"default CommandPool"),"\nimplements ",(0,m.mdx)("inlineCode",{parentName:"p"},"CommandPoolInterface")," and takes a list of commands as an optional argument for the constructor."),(0,m.mdx)("h2",{id:"command-pool-configuration-for-a-particular-provider"},"Command pool configuration for a particular provider"),(0,m.mdx)("p",null,"Following is an example of the command pool configuring for the Braintree payment provider, and adding it to the provider's payment method configuration (",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/etc/di.xml"},(0,m.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Braintree/etc/di.xml")),")."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'...\n\x3c!-- BraintreeCommandPool - a command pool for the Braintree payments provider --\x3e\n<virtualType name="BraintreeCommandPool" type="Magento\\Payment\\Gateway\\Command\\CommandPool">\n    <arguments>\n        <argument name="commands" xsi:type="array">\n            <item name="authorize" xsi:type="string">BraintreeAuthorizeCommand</item>\n            <item name="sale" xsi:type="string">BraintreeSaleCommand</item>\n            <item name="capture" xsi:type="string">BraintreeCaptureStrategyCommand</item>\n            ...\n        </argument>\n    </arguments>\n</virtualType>\n...\n\x3c!-- Adding BraintreeCommandPool to the Braintree payment method configuration:--\x3e\n<virtualType name="BraintreeFacade" type="Magento\\Payment\\Model\\Method\\Adapter">\n    <arguments>\n        ...\n        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>\n    </arguments>\n</virtualType>\n...\n')),(0,m.mdx)("p",null,"(The code sample is from Magento Open Source v2.1. Although the payment provider gateway was added in v2.0, the particular default implementation using the gateway were added in v2.1.)"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-payment-gateway-command-pool-md-30e9502a4331e2e205e3.js.map