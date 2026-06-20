[dart:html](../../dart-html/dart-html-library){._links-link}

provider property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? provider
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get provider native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FederatedCredential/provider.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/provider.md)

# provider

The `provider` meta-argument in Terraform specifies which provider configuration to use for a resource, overriding the default provider selection based on the resource type name. This is useful in scenarios where multiple configurations of the same provider are required, such as managing resources a
cross different regions or environments. By setting the `provider` argument, you can ensure that the resource uses the specified provider setup, identified by its alias, enhancing control and flexibil
ity in multi-provider or multi-region deployments. This meta-argument is essential for precisely directing Terraform on how to interact with the underlying infrastructure provider.

Learn more from the following resources:

- [@official@Terraform Docs - provider](https://developer.hashicorp.com/terraform/language/meta-arguments/resource-provider)
- [@article@Terraform by Example - provider](https://www.terraformbyexample.com/providers/)


## 관련 로드맵
- [[Terraform|terraform]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Provider.md)

# Provider

Provider is a wrapper around InheritedWidget (base class for widgets that efficiently propagate information down the tree) to make them easier to use and more reusable.

Visit the following resources to learn more:

- [@official@Provider](https://pub.dev/packages/provider)
- [@official@Simple App State Management](https://docs.flutter.dev/development/data-and-backend/state-mgmt/simple)

## 관련 로드맵
- [[Flutter|flutter]]
