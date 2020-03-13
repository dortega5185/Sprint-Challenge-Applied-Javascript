// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        console.log(response)
        //deal with the response data in here
        response.data.topics.forEach( topic => {
            // console.log(topic)
            const tab = document.querySelector('.topics')
            tab.append(NewTab(topic))
        })
    })
    .catch( err => {
        //deal with the error in here
        console.log('Error:', err)
    })

function NewTab(data) {
    const topic = document.createElement('div')       
    topic.classList.add('tab')
    topic.textContent = data

    return topic
}