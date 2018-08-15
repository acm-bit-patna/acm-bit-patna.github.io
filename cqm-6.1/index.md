---
title: CQM 6.1 editorials & leaderboard
description: Editorials for CQM 6.1 conducted on 14th August, 2018
---

# [CQM-6.1](https://www.hackerrank.com/contests/cqm-6-1/)

Contest conducted on 14th August, 2018

# Leaderboard

1. Maverick_12345 (Sanjeet Kumar 2k16)
2. aditigupta6226 (Aditi Gupta 2k17) (Winner)
3. weBloomer (Roushan 2k16)

# Editorials

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

## [Queens On The Mars](https://www.hackerrank.com/contests/cqm-6-1/challenges/queens-on-the-mars)
There are many approaches to solve this problem either by Dynamic Programming or by Greedy Algorithm or also by simple implementation.
Following is the DP implementation:

The number of queens and their priority is given in the question. Make an array let ‘dp[n]’ of size ‘n’ containing the distribution of troops.

Step 1:  Assign all indices of dp[n] by 1 i.e. distribute 1 troop to all queens.

Step 2:  Traverse from left to right in the Priority array, if priority of next queen is greater than the present, increase the number of troops of next queen by 1 from the present queen i.e. dp[i+1]=dp[i]+1.

Step 3:  Repeat the step 2 from right to left, if priority of next queen is greater than the present but troops in not greater, then increase the number of troops of next queen by 1 from the present queen i.e. dp[i-1]=dp[i]+1.

The array dp[n] obtained now is optimal distribution of troops, print the sum of all troops in array dp[n].

For example let there the 7 queens and their priorities are [3 8 8 4 3 2 1]
Troops distribution in step 1 will be [1,1,1,1,1,1,1], in step 2 it will be [1,2,1,1,1,1,1], and finally in step 3 it will be [1,2,5,4,3,2,1], which is the optimal distribution of troops.

Complexity: O(n).

Code (in Java) :
````java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;

public class princess {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
            int n=sc.nextInt(),a[]=new int[n],i,j,b[]=new int[n],dp[]=new int[n]; long sum1=0,sum2=0;
            for(i=0;i<n;i++)
                a[i]=sc.nextInt();
              dp[0]=1;
              for(i=1;i<n;i++) {
            	  if(a[i]>a[i-1])
            		  dp[i]=dp[i-1]+1;
            	  else if(a[i]<=a[i-1])
            		  dp[i]=1;
              }
                for(i=n-2;i>=0;i--) {
                	if(a[i]>a[i+1])
                		dp[i]=Math.max(dp[i],dp[i+1]+1);
                }
                 for(i=0;i<n;i++)
                	 sum1+=dp[i];
                 System.out.println(sum1);
    }
}
````

Code (in C++) :
````cpp
#include <iostream>
#define ll long long
using namespace std;

int main(){
    ll n;
    cin>>n;
    ll arr[n], dp[n];
    for(ll i=0; i<n; i++){
        cin>>arr[i];
        dp[i]=1;
    }
    for(ll i=0; i<n-1; i++){
        if(arr[i+1]>arr[i]){
            dp[i+1]=dp[i]+1;
        }
    }
    for(ll i=n-1; i>0; i--){
        if(arr[i-1]>arr[i] && dp[i-1]<=dp[i]){
            dp[i-1]=dp[i]+1;
        }
    }
    ll sum=0;
    for(ll i=0; i<n; i++){
        sum+=dp[i];
    }
    cout<<sum<<endl;
    return 0;
}
````
