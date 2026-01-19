from turtle import *

#we want to paint a house 

#step1: draw a square
speed(5)
width(7)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

color("black")
left(30)
forward(20)
begin_fill()
left(90)
forward(70)
right(90)
forward(50)
right(90)
forward(70)
end_fill()
penup()
goto(200, 180)
pendown()
begin_fill()
forward(70)
left(90)
forward(50)
left(90)
forward(70)
end_fill()
penup()
goto(200,155)
color("blue")
left(165)








exitonclick()