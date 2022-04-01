---
title: '‘수어 시상’에 ‘파란 리본’까지…윤여정의 품격'
categories: ['Algorithm']
tags: ['BOJ']
date: '2022-03-18'
---

testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest

## 🤔 테스트 서브

testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
test

### 📱 테스트 3asfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfas

asfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfasasfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfasasfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfas

#### 👨‍💻 테스트 4asfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfas

asfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfasasfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfasasfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfas

##### 🚀 테스트 5asfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfas

asfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfasasfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfasasfsdafafasfasfsafsafafdsafafdsafasfasfdsafdsafdsafasfas

```java {numberLines, 1, 3-4}
fun floyd() {
    val inf = 10000000
    val nodeCount = 5
    printf("%d %d", 1, 2)
    val distances = Array(5 + 1) { i ->
        IntArray(5 + 1) { j ->
            if (i == j) 0 else inf
        }
    }
    graph.forEach {
        val (a, b, cost) = it
        distances[a][b] = cost
        distances[b][a] = cost
    }
    for (k in 1..nodeCount) {
        for (i in 1..nodeCount) {
            for (j in 1..nodeCount) {
                distances[i][j] = min(distances[i][j],  distances[i][k] + distances[k][j])
            }
        }
    }
}
```
