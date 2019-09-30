### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Features that need improvement :
 - There is an overlap between the two filters, they can't be used together at the same time
 - Error handling
 - Field validation

Search Improvement :
 - Update the list letter by letter
 - Not Search the full word (or start of the word), but part of it or a fuzzy search (ex: Onyx for Onix)
 - Suggestion while typing

UX Improvement :
 - Height filter could show the min and max height available currently in the list
 - Weakness filter could only allow for available options (ex: in a type 'Fire' search, not have 'Fairy', 'Dark', etc available)
 - Weakness filter could allow for multiple selections
 
 Share the table & state :
 - Arguments could be added to the url, with the search term and current filters, to allow sharing specific results.

The app has been developped as much as possible with stateless components to try and optimize the performances. The react-select library is using life-cycle methods, which makes the usage of the Weakness filter a little heavier.
