from ctypes import addressof
from tkinter.font import names
from bs4 import BeautifulSoup
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import requests
import json
import re

loadedDictionary = {}
counter = 57

def addRankerPlayer(source, playerName, playerTeam, playerNumber, playerType):
    global counter, loadedDictionary

    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(source)
    
    time.sleep(2)  # Allow 2 seconds for the web page to open
    scroll_pause_time = 1 # You can set your own pause time. My laptop is a bit slow so I use 1 sec
    screen_height = driver.execute_script("return window.screen.height;")   # get the screen height of the web
    i = 1

    while True:
        # scroll one screen height each time
        driver.execute_script("window.scrollTo(0, {screen_height}*{i});".format(screen_height=screen_height, i=i))  
        i += 1
        time.sleep(scroll_pause_time)
        # update scroll height each time after scrolled, as the scroll height can change after we scrolled the page
        scroll_height = driver.execute_script("return document.body.scrollHeight;")  
        # Break the loop when the height we need to scroll to is larger than the total scroll height
        if (screen_height) * i > scroll_height:
            break 
    
    soup = BeautifulSoup(driver.page_source, "lxml")
    loadedDictionary["names"].update({playerName : {}})
    loadedDictionary["names"][playerName]['name'] = playerName
    loadedDictionary["names"][playerName]['nicknames'] = []
    loadedDictionary["names"][playerName]['key'] = counter
    loadedDictionary["names"][playerName]['team'] = playerTeam
    loadedDictionary["names"][playerName]['number'] = playerNumber
    loadedDictionary["names"][playerName]['type'] = playerType
    nicknameTags = soup.find_all("h2", class_="listItem_name__Qq_Y8")
    for nicknames in nicknameTags:
        nickname = nicknames.text
        nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
        if (nickname != ""):
            loadedDictionary["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add values to
dictionary when website is
Sportkeeda
'''


def addSportkeedaPlayer(source, playerName, playerTeam, playerNumber, playerType):
    global counter, loadedDictionary
    source = requests.get(source)
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    loadedDictionary["names"].update({playerName : {}})
    loadedDictionary["names"][playerName]['name'] = playerName
    loadedDictionary["names"][playerName]['nicknames'] = []
    loadedDictionary["names"][playerName]['key'] = counter
    loadedDictionary["names"][playerName]['team'] = playerTeam
    loadedDictionary["names"][playerName]['number'] = playerNumber
    loadedDictionary["names"][playerName]['type'] = playerType
    nicknameTags = soup.find_all('li', class_=None, id=None)
    for nicknames in nicknameTags:
        nickname = nicknames.text
        if '.' in nickname:
            nickname = nickname.strip(nickname[-1])
        nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
        if (nickname != ""):
            loadedDictionary["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add values to
dictionary when website is
cheat sheet
'''


def addCheatSheetPlayer(source, playerName, playerTeam, playerNumber, playerType):
    global counter, loadedDictionary
    source = requests.get(source)
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    loadedDictionary["names"].update({playerName : {}})
    loadedDictionary["names"][playerName]['name'] = playerName
    loadedDictionary["names"][playerName]['nicknames'] = []
    loadedDictionary["names"][playerName]['key'] = counter
    loadedDictionary["names"][playerName]['team'] = playerTeam
    loadedDictionary["names"][playerName]['number'] = playerNumber
    loadedDictionary["names"][playerName]['type'] = playerType
    nicknameTags = soup.find_all("span", class_="auton")
    for nicknames in nicknameTags:
        nickname = nicknames.text
        nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
        if (nickname != ""):
            loadedDictionary["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add players from
FanDual website
'''


def addFanDualPlayer(source, playerName, playerTeam, playerNumber, playerType):
    global counter, loadedDictionary
    source = requests.get(source)
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    loadedDictionary["names"].update({playerName : {}})
    loadedDictionary["names"][playerName]['name'] = playerName
    loadedDictionary["names"][playerName]['nicknames'] = []
    loadedDictionary["names"][playerName]['key'] = counter
    loadedDictionary["names"][playerName]['team'] = playerTeam
    loadedDictionary["names"][playerName]['number'] = playerNumber
    loadedDictionary["names"][playerName]['type'] = playerType
    nicknameTags = soup.find_all("h2", {"data-mm-id": True})
    for index, nicknames in enumerate(nicknameTags):
        if (index > 1):  # skip first two results
            nickname = nicknames.text
            # find period to remove the number for e/ nickname
            nickname = nickname[nickname.index('.') + 1:]
            nickname = nickname.strip()
            nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
            if (nickname != ""):
                loadedDictionary["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add players from
Flurry Sports website
'''


def addFlurrySportsPlayer(source, playerName, playerTeam, playerNumber, playerType):
    global counter, loadedDictionary
    source = requests.get(source)
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    loadedDictionary["names"].update({playerName : {}})
    loadedDictionary["names"][playerName]['name'] = playerName
    loadedDictionary["names"][playerName]['nicknames'] = []
    loadedDictionary["names"][playerName]['key'] = counter
    loadedDictionary["names"][playerName]['team'] = playerTeam
    loadedDictionary["names"][playerName]['number'] = playerNumber
    loadedDictionary["names"][playerName]['type'] = playerType
    playerHeading = soup.find("ul", class_=None)
    nicknames = playerHeading.find_all("li")
    for nickname in nicknames:
        nickname = nickname.text
        nickname = nickname.strip('\n')
        nickname = nickname.replace('\n', '')
        if (nickname != ""):
            loadedDictionary["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to group players whose nicknames
comes from websites that are only used once
'''


def addOtherPlayers():
    global counter, loadedDictionary
    # AE


def addPlayersToDictionary():
    addRankerPlayer(
        "https://www.ranker.com/list/best-justin-fields-fantasy-name/pedro-cerrano",
        "Justin Fields",
        "Chicago, Bears",
        1,
        "QB"
    )
    addCheatSheetPlayer(
        "https://www.cheatsheetwarroom.com/blog/fantasy-football/names/quarterback-names/dak-prescott",
        "Dak Prescott",
        "Dallas, Cowboys",
        4,
        "QB"
    )
    addFlurrySportsPlayer(
        "https://www.drodd.com/fantasyteamname/kirk-cousins-fantasy-football-team-names.html",
        "Kirk Cousins",
        "Minnesota, Vikings",
        8,
        "QB"
    )
    addCheatSheetPlayer(
        "https://www.cheatsheetwarroom.com/blog/fantasy-football/names/quarterback-names/aaron-rodgers",
        "Aaron Rodgers",
        "Green Bay, Packers",
        12,
        "QB"
    )
    addFlurrySportsPlayer(
        "https://www.drodd.com/fantasyteamname/daniel-jones-fantasy-names.html",
        "Daniel Jones",
        "New York, Giants",
        8,
        "QB"
    )
    addFlurrySportsPlayer(
        "https://flurrysports.org/russell-wilson-fantasy-football-team-names/",
        "Russell Wilson",
        "Denver, Broncos",
        3,
        "QB"
    )
    addFanDualPlayer(
        "https://www.fanduel.com/theduel/posts/javonte-williams-fantasy-football-team-names-01ga9mxazh1b",
        "Javonte Williams",
        "Denver, Broncos",
        33,
        "RB"
    )
    addRankerPlayer(
        "https://www.ranker.com/list/best-amari-cooper-fantasy-name/pedro-cerrano",
        "Amari Cooper",
        "Cleveland, Browns",
        2,
        "WR"
    )
    addFlurrySportsPlayer(
        "https://flurrysports.org/garrett-wilson-fantasy-football-team-names/",
        "Garrett Wilson",
        "New York, Jets",
        17,
        "WR"
    )
    addFlurrySportsPlayer(
        "https://www.drodd.com/fantasyteamname/courtland-sutton-fantasy-team-names.html",
        "Courtland Sutton",
        "Denver, Broncos",
        14,
        "WR"
    )
    addCheatSheetPlayer(
        "https://www.cheatsheetwarroom.com/blog/fantasy-football/names/wide-receiver-names/deandre-hopkins",
        "DeAndre Hopkins",
        "Arizona, Cardinals",
        10,
        "WR"
    )
    addFanDualPlayer(
        "https://www.fanduel.com/theduel/posts/david-montgomery-fantasy-football-team-names-2021-season-01fevqqatwdf",
        "David Montgomery",
        "Chicago, Bears",
        32,
        "RB"
    )
    addFlurrySportsPlayer(
        "https://flurrysports.org/allen-lazard-fantasy-football-team-names/",
        "Allen Lazard",
        "Green Bay, Packers",
        13,
        "WR"
    )

def createJSONFile():
    namesJSON = json.dumps(loadedDictionary, indent=4)
    with open("fantasy-nicknames-new.json", "w") as outfile:
        json.dump(namesJSON, outfile)

def loadJSONFile():
    global loadedDictionary
    with open('fantasy-nicknames-new.json') as json_file:
        loadedDictionary = json.load(json_file)


def main():
    loadJSONFile()
    addPlayersToDictionary()
    createJSONFile()

main()
