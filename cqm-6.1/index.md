---
title: CQM 6.1 editorials
description: Editorials for CQM 6.1 conducted on 14th August, 2018
---
# CQM-6.1-Editorials
Editorials for CQM 6.1 conducted on 14th August, 2018

## [Brady's Cricket Scorecard](https://www.hackerrank.com/contests/cqm-6-1/challenges/bradys-cricket-scorecard)

This question is rather straight forward. The team batting first can either play 30 balls, or lose 10 wickets. We loop through all the events happening in the match and add the score and wickets until either of the two conditions are met. We add the scores and wickets in a similar way for the second team and display the final scorecard.

Note that for the second team we don't need to check if 10 wickets fell or 30 balls bowled, as the match will be over as soon as those criterias are met, and there won't be any further events. 

Code (in C++) :
````cpp
#include <iostream>
using namespace std;


int main() {
    string events;
    cin >> events;
    int balls = events.size();
    int runs1= 0, runs2 = 0, wickets1 = 0, wickets2 = 0;
    for(int ball = 0; ball < balls; ball++){
        if(ball < 30 && wickets1 < 10) {
            if(events[ball]=='W') {
                wickets1++;
            } else {
                runs1+=(int(events[ball])-48);
            }
        } else {
            if(events[ball]=='W'){
                wickets2++;
            }
            else{
                runs2+=(int(events[ball])-48);
            }
        }
    }
    cout<<"SPX: " << runs1 << "/" << wickets1 << endl;
    cout<<"CHK: " << runs2 << "/" << wickets2 << endl;
    return 0;
}
````

## [Shekharberg: The Man With The Difference](https://www.hackerrank.com/contests/cqm-6-1/challenges/shashank-and-the-difference)

Out of N positive integers, we need to find the highest K-consecutive-group sum and the lowest K-consecutive-group sum. The naive approach would be to iterate over the elements in a double loop and updating the maximum and minimum sum that you can find after each K-iteration. In this approach, we will update the sum to 0 after each iteration. This will only give partial scoring because of the Time Limit Exceeded error due to its complexity being O(N^2).

There is one method in which we can add the elements upto index i for each i in N and store the sum in another array. Now, after choosing the starting and ending index, we will be able to find the sum of K-consecutive elements in O(N).

There is one other method which is called the sliding window method in which we store the elements upto K in a variable and then we iterate from k+1 to N. For each iteration of i in k+1 to N, we remove the (i-k)th element and add the ith element to this variable, keeping the size of the sliding window the same (Note: 1-based indexing). So, we are able to find the sum of all possible K-consecutive elements. We can update the maximum and minimum after each iteration from this technique.

So, getting a right answer in O(N) time was the correct way to approach the question.

Code (in C++) :
````cpp
#include <bits/stdc++.h>
#define ll long long
using namespace std;


int main() {
    ll t,n,k,s,i,j,ma,mi;
    cin>>t;
    while(t--){
        cin>>n>>k;
        ll a[n];ma=0;mi=0;s=0;
        for(i=0;i<n;i++){
            cin>>a[i];
        }
        for(i=0;i<k;i++){
            ma+=a[i];mi+=a[i];s+=a[i];
        }
        for(i=k;i<n;i++){
            s+=a[i];s-=a[i-k];
            ma=max(ma,s);mi=min(s,mi);
        }
        cout<<ma-mi<<endl;
    }
    return 0;
}
````

## [Malfoy and Quiz](https://www.hackerrank.com/contests/cqm-6-1/challenges/malfoy-and-quiz)

Let's see the problem from backward approach. Assume there are n problems and 
k options for each problem. So for the last problem malfoy needs k people so that
every option is selected by atleast one of them. But how do we get k people left 
for the last question? For that, there must have been k groups of k people for the 
(n-1)th problem, i.e K*K = k^2 people for (n-1)th problem. Again, for k^2 people in 
the n-1th problem, malfoy needs k^2 group of k people in the (n-2)th problem, i.e 
k^2*k = k^3 people for (n-2)th problem.

Thus for n problems, malfoy needs k^n people in order to assure him victory.
This can be achieved in O(n) using naive technique .

Code (in C++) :

 ````cpp
 #include<bits/stdc++.h>
 using namespace std ;
 int main(){
  long long n,k,ans = 1 ,mod = 1000000007 ;
  cin>>n>>k ;
  for(int i = 0 ; i< n ; i++) ans = (ans*k)%mod ;
 cout<<ans<<endl ;
}
````
