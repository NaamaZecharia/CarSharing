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

    mycursor.execute("SELECT user_id, name, is_owner  FROM users")

    myresult = mycursor.fetchall()

    for x in myresult:
      print(x)
    
    return myresult

  def signin(self, email, password, name, phone, is_owner): 
    print('{0}-email,{1}- password, {2}-name,{3}-phone,{4}-is_owner'.format(email, password, name, phone, is_owner))
    mycursor = self.mydb.cursor()

    sql = "INSERT INTO users (name, phone, is_owner, email, password) VALUES (%s,%s, %s, %s, %s)"
    val = (name, phone, is_owner, email, password)
    

    mycursor.execute(sql, val)

    self.mydb.commit()

    print(mycursor.rowcount, "record inserted.")

    mycursor.execute("SELECT user_id, email, password  FROM users")

    myresult = mycursor.fetchall()

    

    return myresult



# data = dataAccess()
# data.getAllUsers()
# data.signin('shir@gmail.com', 1234, 'shir', 8896, 1)

