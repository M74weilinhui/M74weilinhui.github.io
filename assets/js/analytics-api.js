<script async defer src="https://apis.google.com/js/api.js"></script>
<script>
function start() {
  gapi.client.init({
    'apiKey': 'AIzaSyD6NHsXysGZDz3q-mNbtoTcGq84VhUCCx4',
    'discoveryDocs': ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
    'clientId': '773792553721-e54unvdh3dl4pnnv49ccr2u2i007thsc.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/analytics.readonly'
  }).then(function () {
    return gapi.client.analyticsreporting.reports.batchGet({
      "reportRequests":[
        {
          "viewId":"8244229465",
          "dateRanges":[
            {
              "startDate":"7daysAgo",
              "endDate":"today"
            }
          ],
          "metrics":[
            {
              "expression":"ga:sessions"
            }
          ]
        }
      ]
    });
  }).then(function(response) {
    var formattedJson = JSON.stringify(response.result, null, 2);
    document.getElementById('analytics-data').innerText = formattedJson;
  }).catch(function(error) {
    console.error('Error fetching data from Google Analytics', error);
  });
}
gapi.load('client', start);
</script>
