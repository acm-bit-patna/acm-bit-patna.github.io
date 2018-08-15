Malfoy and Quiz :- 

Let's see the problem from backward approach. Assume there are n problems and 
k options for each problem. So for the last problem malfoy needs k people so that
every option is selected by atleast one of them. But how do we get k people left 
for the last question? For that, there must have been k groups of k people for the 
(n-1)th problem, i.e K*K = k^2 people for (n-1)th problem. Again, for k^2 people in 
the n-1th problem, malfoy needs k^2 group of k people in the (n-2)th problem, i.e 
k^2*k = k^3 people for (n-2)th problem.
Thus for n problems, malfoy needs k^n people in order to assure him victory.
This can be achieved in O(n) using naive technique .

CODE:- 

#include<bits/stdc++.h>

using namespace std ;

int main(){
  long long n,k,ans = 1 ,mod = 1000000007 ;
  cin>>n>>k ;
  for(int i = 0 ; i< n ; i++) ans = (ans*k)%mod ;
 cout<<ans<<endl ;
}