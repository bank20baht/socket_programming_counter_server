# socket_programming_counter_server try socket programming using state 
how to run
```
node <file_name.js> 
node server.js
```
# หลักการทำงานของ code
client จะทำการส่งชื่อมาให้ หากยังไม่มีชื่อก็จะสร้าง key:value ของชื่อนั้นขึ้นมาโดยค่าเริ่มต้นคือ 0 เเล้วจะส่งคำว่า ok กลับไป
เมื่อ client ได้รับคำว่า ok เเล้วก็จะทำการส่งตัวเลขไป เเล้วตัว server จะรับค่าเเล้วเอาไปบวกค่าใน db (array)
หากมีชื่อในระบบเเล้วก็จะเอาค่าที่ได้ไปบวกกับค่าที่มีในระบบเเล้วส่งค่ากลับไปให้ client ดังกล่าวเเทน

# sequence diagram
![Screenshot 2023-03-24 200113](https://user-images.githubusercontent.com/89448778/227528321-a57a09e1-88bf-400a-aa4f-95589bd4baaa.png)

# example
![Screenshot 2023-03-24 200758](https://user-images.githubusercontent.com/89448778/227529578-9fb1fe98-a9cd-4653-8aa5-19be32f9085b.png)
