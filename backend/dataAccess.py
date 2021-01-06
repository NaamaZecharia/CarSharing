import mysql.connector

class dataAccess(): 

  def __init__(self):

    self.mydb = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="1234",
    database="car_sharing"
  )

  def getAllUsers(self): 
    mycursor = self.mydb.cursor()

    sql = "INSERT INTO users (name, phone, is_owner) VALUES (%s,%s, %s)"
    val = ("Highway 21", 345, 0)

    mycursor.execute(sql, val)

    self.mydb.commit()

    print(mycursor.rowcount, "record inserted.")

    mycursor.execute("SELECT user_id, name, is_owner  FROM users")

    myresult = mycursor.fetchall()

    for x in myresult:
      print(x)
    
    return myresult



# data = dataAccess()
# data.getAllUsers()

