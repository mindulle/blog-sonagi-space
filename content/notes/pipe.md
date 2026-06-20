[dart:async](../../dart-async/dart-async-library){._links-link}

pipe method
===========

::: {.section .multi-line-signature}
[Future](../future-class) pipe(

1.  [StreamConsumer](../streamconsumer-class)\<T\> streamConsumer

)
:::

Pipes the events of this stream into `streamConsumer`.

All events of this stream are added to `streamConsumer` using
[StreamConsumer.addStream](../streamconsumer/addstream). The
`streamConsumer` is closed when this stream has been successfully added
to it - when the future returned by `addStream` completes without an
error.

Returns a future which completes when this stream has been consumed and
the consumer has been closed.

The returned future completes with the same result as the future
returned by [StreamConsumer.close](../streamconsumer/close). If the call
to [StreamConsumer.addStream](../streamconsumer/addstream) fails in some
way, this method fails in the same way.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future pipe(StreamConsumer<T> streamConsumer) {
  return streamConsumer.addStream(this).then((_) => streamConsumer.close());
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/pipe.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/pipe.md)

# Pipe Commands

The pipe (`|`) is a powerful feature in Linux used to connect two or more commands together. This mechanism allows output of one command to be "piped" as input to another. With regards to text processing, using pipe is especially helpful since it allows you to manipulate, analyze, and transform text
 data without the need to create intermediary files or programs.

Here is a simple example of piping two commands, `ls` and `grep`, to list all the text files in the current directory:

    ls | grep '\.txt$'
    

In this example, `ls` lists the files in the current directory and `grep '\.txt$'` filters out any files that don't end with `.txt`. The pipe command, `|`, takes the output from `ls` and uses it as the input to `grep '\.txt$'`. The output of the entire command is the list of text files in the curren
t directory.

Visit the following resources to learn more:

- [@article@An In-Depth Guide to Pipes in Linux - TheLinuxCode](https://thelinuxcode.com/linux-pipe-command-examples/)
- [@article@Piping and Redirection](https://ryanstutorials.net/linuxtutorial/piping.php#piping)
- [@article@What is Piping in Linux?](https://linuxsimply.com/what-is-piping-in-linux/)

## 관련 로드맵
- [[Linux|linux]]
