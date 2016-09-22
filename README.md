# Build Comparison Chart Data Context 
In this repo, you'll find a simple static HTML page that includes a React component called `ComplexBarChart` which, given an appropriate data structure, will render a bar chart using Plotly's JS library (a wrapper for D3). In addition, you'll find a global variable called `sampleData` which loads in a JSON blob representing a theoretical response from our API. 

## Task
The goal of this task is to have you build what we've been calling a `data context` which transforms API data into the API of the component which will render the data for our users. The data context you build should transform the data in `sampelData` and pipe that into the `data` prop for the React component `<ComplexBarChart />`.
