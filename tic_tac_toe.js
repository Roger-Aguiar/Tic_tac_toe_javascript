/* 
Name:         Roger Silva Santos Aguiar
Function:     This file implements the tic-tac-toe game. 
Initial date: June 26, 2020
Last update:  June 27, 2020 
*/

var emptySpace = [];

initializeEmptySpaceArray();

//****************************************************************
//Functions

function initializeEmptySpaceArray()
{
    for(var count = 0; count < 9; count++)
    {
        emptySpace.push("");
    }

}

function player_O(movePlayer)
{
    switch(movePlayer)
    {
        case 0:
            document.getElementById('0').innerHTML = "O";              
            fillEmptySpace(0, "O");          
            break;
        case 1:
            document.getElementById('1').innerHTML = "O";
            fillEmptySpace(1, "O");            
            break;
        case 2:
            document.getElementById('2').innerHTML = "O";
            fillEmptySpace(2, "O");            
            break;
        case 3:
            document.getElementById('3').innerHTML = "O";
            fillEmptySpace(3, "O");            
            break;
        case 4:
            document.getElementById('4').innerHTML = "O";
            fillEmptySpace(4, "O");            
            break;
        case 5:
            document.getElementById('5').innerHTML = "O";
            fillEmptySpace(5, "O");            
            break;
        case 6:
            document.getElementById('6').innerHTML = "O";
            fillEmptySpace(6, "O");            
            break;
        case 7:
            document.getElementById('7').innerHTML = "O";
            fillEmptySpace(7, "O");           
            break;
        case 8:
            document.getElementById('8').innerHTML = "O";
            fillEmptySpace(8, "O");            
            break;
    }
     
    player_X();
}

function player_X()
{
    var remainingEmptySpaces = lookForEmptySpace();
    markX(remainingEmptySpaces);    
}

function lookForEmptySpace()
{
    var remainingEmptySpaces = [];

    for(var i = 0; i < emptySpace.length; i++)
    {
        if(emptySpace[i] == "")
        {
            remainingEmptySpaces.push(i);
        }
    }
    return remainingEmptySpaces;
}

function markX(remainingEmptySpaces = [])
{
    var spaceToBeFilled = Math.floor((Math.random() * remainingEmptySpaces.length) + 0);

    if(remainingEmptySpaces[spaceToBeFilled] == 0)
    {
        fillEmptySpace(0, "X");
        document.getElementById('0').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 1)
    {
        fillEmptySpace(1, "X");
        document.getElementById('1').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 2)
    {
        fillEmptySpace(2, "X");
        document.getElementById('2').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 3)
    {
        fillEmptySpace(3, "X");
        document.getElementById('3').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 4)
    {
        fillEmptySpace(4, "X");
        document.getElementById('4').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 5)
    {
        fillEmptySpace(5, "X");
        document.getElementById('5').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 6)
    {
        fillEmptySpace(6, "X");
        document.getElementById('6').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 7)
    {
        fillEmptySpace(7, "X");
        document.getElementById('7').innerHTML = "X";        
    }
    else if(remainingEmptySpaces[spaceToBeFilled] == 8)
    {
        fillEmptySpace(8, "X");
        document.getElementById('8').innerHTML = "X";        
    }
}

function fillEmptySpace(filledSpace, mark)
{
    switch (filledSpace)
    {
        case 0:
            if(mark == "O")
            {
                emptySpace[0] = "O";
            } 
            else
            {
                emptySpace[0] = "X";
            }
            break;
        case 1:
            if(mark == "O")
            {
                emptySpace[1] = "O";
            } 
            else
            {
                emptySpace[1] = "X";
            }
            break;
        case 2:
            if(mark == "O")
            {
                emptySpace[2] = "O";
            } 
            else
            {
                emptySpace[2] = "X";
            }
            break;
        case 3:
            if(mark == "O")
            {
                emptySpace[3] = "O";
            } 
            else
            {
                emptySpace[3] = "X";
            }
            break;
        case 4:
            if(mark == "O")
            {
                emptySpace[4] = "O";
            } 
            else
            {
                emptySpace[4] = "X";
            }
            break;
        case 5:
            if(mark == "O")
            {
                emptySpace[5] = "O";
            } 
            else
            {
                emptySpace[5] = "X";
            }
            break;
        case 6:
            if(mark == "O")
            {
                emptySpace[6] = "O";
            } 
            else
            {
                emptySpace[6] = "X";
            }
            break;
        case 7:
            if(mark == "O")
            {
                emptySpace[7] = "O";
            } 
            else
            {
                emptySpace[7] = "X";
            }
            break;
        case 8:
            if(mark == "O")
            {
                emptySpace[8] = "O";
            } 
            else
            {
                emptySpace[8] = "X";
            }
            break;
    }
}
