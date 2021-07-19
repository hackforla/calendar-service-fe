# This is a living document that compiles questions about the Case Worker user flow

Other FE devs: If you have questions that this document doesn't cover, please

1. Add to it, following the list format
2. Include links to the specific screen you are asking about
3. Add as much detail to your question as is necessary to give full context

## Questions

1. The payload shape that the service accepts seems to only relate to the `Meeting Preferences` page.
   1. In the UI, these are the meeting types the user can currently select: ```"name":"Training" | "Interview" | "Home Inspection" | "Home Selection" | "Home Visit"```
   2. Is the data tied to a userId or some unique identifier?
   3. If so, where is that handled in the UI?
2. Where should this [daily availability](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=646%3A1031) be sent to in your service or another API?
3. For [this screen](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=855%3A8157) it seems that the user can select from the same options on this [this screen](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=830%3A6580). Maybe it's better to not have the redundancy in the selection process
4. It looks like [this screen](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=888%3A10536) is the user's availability that has been stored somewhere and can be edited/added to. Where should FE store this data? It also seems like this is a redundant step since the user is also given an opportunity to edit their selections [here](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=830%3A9161)
5. The screen to the right of [this screen](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=830%3A7894) has sliding times that are inconsistent with the dropdown behavior elsewhere in the app. I think we should treat those `From` and `To` time fields as dropdowns.
6. When should this [progress bar](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=855%3A8680) be shown? It's unclear form the mockups because it's only shown at steps 1, 3, and 6.
7. There are lots of screens that have `Cancel` option at the bottom of them. The `Save & Next` is clear because it advances you to the next screen. `cancel` is confusing because it feels like it should function as a `back` button, but `cancel` implies exiting the whole process.
8. The `My Schedule` tab [link](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=855%3A8468) is shown several times in the flow never actually used. Is it necessary to still show it?
9. The `Calendar View` page on [this screen](https://www.figma.com/file/kwUcXHYpKMHhuktdElLmmw/Calendaring-Home-Unite-Us-Copy?node-id=154%3A498) has data that is used but have no idea where it is coming from. Specifically, the preferred days of "Tracy" and the home owner as well. Are we suppose to recieve some sort of payload that has the inspector's name, preferred days, home owner's preferred days.
