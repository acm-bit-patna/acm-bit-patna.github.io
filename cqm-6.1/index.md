---
title: CQM 6.1 editorials
description: Editorials for CQM 6.1 conducted on 14th August, 2018
categories: [gsoc]
comments: true
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
