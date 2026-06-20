---
title: "fetch()"
category: Utilities
visibility: public
tags: ["advanced","markdown","async","fetch"]
language: "markdown"
source: "Supabase Migration"
last_modified: "2026-05-16"
---

# fetch()

## 설명


## 코드 (markdown)
```markdown
# fetch()

The Fetch API is used to make Promise-based, asynchronous HTTP requests.
Basic Syntax

Pass the URL for your HTTP request into the fetch() method as an argument.

In a then() callback method, if the response.ok property is true, return the response.json(). Otherwise, return a rejected Promise. In the next then() callback, you can work with the JSON response data. Use the catch() method to handle errors.

```js
fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {

 // The API call was successful!
 if (response.ok) {
  return response.json();
 }

 // There was an error
 return Promise.reject(response);

}).then(function (data) {
 // This is the JSON from our response
 console.log(data);
}).catch(function (err) {
 // There was an error
 console.warn('Something went wrong.', err);
});
```
```

---
*Spells Bot Supabase에서 마이그레이션된 스니펫입니다.*
