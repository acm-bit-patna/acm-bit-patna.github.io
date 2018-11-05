---
title: CQM 6.2 editorials & leaderboard
description: Editorials for CQM 6.1 conducted on 5th November, 2018
---

# [CQM-6.2](https://www.hackerrank.com/contests/cqm-6-1/)

Contest conducted on 14th August, 2018

# Leaderboard

# Editorials

## [Diwali Cards](https://www.hackerrank.com/contests/cqm-6-2/challenges/diwali-cards)

Since both players would want to maximize the number of turns they go,
they would like to chose the card number with maximum occurence in their
deck. let's suppose 'a' is the maximum occurence of a number present in
Arjuna's deck and 'b' is the maximum occurence in Radhay's deck.


```
if(a/2 <= b/2) Radhay wins
else Arjuna wins 
```

## [Lighting up the diyas](https://www.hackerrank.com/contests/cqm-6-2/challenges/lighting-up-the-diyas)

  To arrange the diyas most efficiently, we can fill a row such that there is no overlap in the region of two diyas.
  For example, if there are 9 rows, we can use 9/3 diyas to fill up that row. However if the grid is not divisible by 3, we need to use an extra diya to fill up the row entirely. So, if there are 10 rows, we need 3+1 diyas. Similarly, we can then fill up the columns. The product of these two multiplied by 5 gives us the ml of oil used. Subtract it with initial amount of oil and if it is less than 0, print -1 else print the number


Code (in C++) :
```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
  int t;
  int l,n,m;
  int diyasNeededForARow,diyasNeededForAColumn,totalDiyas,oilConsumed;
  cin >> t;
  while(t--) {
    cin >> l >> n >> m;
    diyasNeededForARow    = n/3 + (n%3 == 0 ? 0 : 1);
    diyasNeededForAColumn = m/3 + (m%3 == 0 ? 0 : 1);
    totalDiyas = diyasNeededForARow*diyasNeededForAColumn;
    oilConsumed = totalDiyas*5;
    if(oilConsumed > l) {
      cout << -1 << endl;
    } else {
      cout << (l-oilConsumed) << endl;
    }
  }
  return 0;
}
```

## [Switching bulbs](https://www.hackerrank.com/contests/cqm-6-2/challenges/switching-bulbs)

DIFFICULTY: EASY

PREREQUISITES: AD-HOC (Basic knowledge of modulus operator) 

QUICK EXPLANATION:

1) If number(N) is divisible by 6, then the answer is 2*(N/6) i.e. (N/3)
   else
2) a) If number(N) mod 6==1 then answer is 2*(N/6)+1
       else 
   b) answer is 2*(N/6)+2


COMPLEXITY: O(1)


C++ Implementation:

```cpp
#include <iostream>
#include <bits/stdc++.h>
#define ll long long int

using namespace std;

int main() {
    ios::sync_with_stdio(0); cin.tie(0);
     ll n;cin>>n;
     if(n%6==0)
       cout<<n/3<<endl;
    else {
        ll rem=n%6;
        if(rem==1)
            cout<<(2*(n/6)+1)<<endl;
        else
            cout<<(2*(n/6)+2)<<endl;
    }
    return 0;
}
```
