# Build Comparison Chart Data Context 
In this repo, you'll find a simple static HTML page that includes a React component called `ComplexBarChart` which, given an appropriate data structure, will render a bar chart using Plotly's JS library (a wrapper for D3). In addition, you'll find a global variable called `sampleData` which loads in a JSON blob representing a theoretical response from our API. 

The goal of this task is to have you build what we've been calling a `data context` which transforms API data into the API of the component which will render the data for our users. The data context you build should transform the data in `sampleData` and pipe that into the `data` prop for the React component `<ComplexBarChart />`.

The structure of the `sampleData` is as follows: 
```
goals: [ <goal> ]
groupings: {
  [groupingType]: {
    [groupName]: [ <teacherId> ] 
  }
}
ratings: {
  [teacherId]: {
    [goalId]: rating
  }
}
teachers: [ <teacher> ]
```

The format of the `data` property required by the component is as follows:
```
var data = [
  {
    x: ['English', 'History', 'Math', 'Science'],
    y: [3, 4, 4, 5]
  }
];

// ...
<ComplexBarChart data={data} targetValue={3.5} maxScaleValue={5}/>
```

## Task 1

For the `subjects` grouping, transform the sample data to display in the `ComplexBarChart` component such that each bar represents a group (i.e. `Art/Music`), and the value of that bar is the average rating of the teachers in that group.

To calculate the average rating of each teacher, you should average their ratings for all of the goals (i.e. each rating within that teacher's rating object).

## Task 2 (optional)

Create a dropdown to switch which grouping to display in the `ComplexBarChart` (i.e. the choices in the dropdown should be `grades`, `schools`, and `subjects`).

## Task 3 (optional)

Add `goals` as an additional option for the grouping dropdown. Calculate the average for a goal across all teachers rather than a specific group of teachers. You can differentiate ratings by goal in each teacher's rating object.

## Task 4 (optional)

Change `goals` grouping to only show parent goals (indicated by a `level` of 0 and `parent` set to null). Change the calculation of the average for a goal to include its child goals (identifiable by the `parent` field of the child goal) by averaging the rating for the parent goal and its child goals.
