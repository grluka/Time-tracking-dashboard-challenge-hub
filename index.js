let dataSet = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]

var app = new Vue({
    el: '#app-1',
    data: {
      work_hours: 20,
      last_work_hours:15,
      play_hours:10,
      last_play_hours:12,
      study_hours:40,
      last_study_hours:22,
      exercise_hours:4,
      last_exercise_hours:2,
      social_hours:5,
      last_social_hours:21,
      self_hours:0,
      last_self_hours:0
    },
    methods: {
        dailyValues: function () {
        this.work_hours= dataSet[0].timeframes.daily.current;   
        this.last_work_hours= dataSet[0].timeframes.daily.previous; 
        this.play_hours= dataSet[1].timeframes.daily.current;   
        this.last_play_hours= dataSet[1].timeframes.daily.previous; 
        this.study_hours= dataSet[2].timeframes.daily.current;   
        this.last_study_hours= dataSet[2].timeframes.daily.previous;
        this.exercise_hours= dataSet[3].timeframes.daily.current;   
        this.last_exercise_hours= dataSet[3].timeframes.daily.previous;
        this.social_hours= dataSet[4].timeframes.daily.current;   
        this.last_social_hours= dataSet[4].timeframes.daily.previous;
        this.self_hours= dataSet[5].timeframes.daily.current;   
        this.last_self_hours= dataSet[5].timeframes.daily.previous;
      },
      weeklyValues:function(){
        this.work_hours= dataSet[0].timeframes.weekly.current;   
        this.last_work_hours= dataSet[0].timeframes.weekly.previous; 
        this.play_hours= dataSet[1].timeframes.weekly.current;   
        this.last_play_hours= dataSet[1].timeframes.weekly.previous; 
        this.study_hours= dataSet[2].timeframes.weekly.current;   
        this.last_study_hours= dataSet[2].timeframes.weekly.previous;
        this.exercise_hours= dataSet[3].timeframes.weekly.current;   
        this.last_exercise_hours= dataSet[3].timeframes.weekly.previous;
        this.social_hours= dataSet[4].timeframes.weekly.current;   
        this.last_social_hours= dataSet[4].timeframes.weekly.previous;
        this.self_hours= dataSet[5].timeframes.weekly.current;   
        this.last_self_hours= dataSet[5].timeframes.weekly.previous;
      },
      monthlyValues:function(){
        this.work_hours= dataSet[0].timeframes.monthly.current;   
        this.last_work_hours= dataSet[0].timeframes.monthly.previous; 
        this.play_hours= dataSet[1].timeframes.monthly.current;   
        this.last_play_hours= dataSet[1].timeframes.monthly.previous; 
        this.study_hours= dataSet[2].timeframes.monthly.current;   
        this.last_study_hours= dataSet[2].timeframes.monthly.previous;
        this.exercise_hours= dataSet[3].timeframes.monthly.current;   
        this.last_exercise_hours= dataSet[3].timeframes.monthly.previous;
        this.social_hours= dataSet[4].timeframes.monthly.current;   
        this.last_social_hours= dataSet[4].timeframes.monthly.previous;
        this.self_hours= dataSet[5].timeframes.monthly.current;   
        this.last_self_hours= dataSet[5].timeframes.monthly.previous;
      }
    }
  })