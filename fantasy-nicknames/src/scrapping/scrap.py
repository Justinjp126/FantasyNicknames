from ctypes import addressof
from tkinter.font import names
from bs4 import BeautifulSoup
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import requests
import json
import re
import pprint

# nickname variable links
j_taylor_source = requests.get(
    "https://www.sportskeeda.com/nfl/40-jonathan-taylor-fantasy-football-names")
n_harris_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-najee-harris-fantasy-football-team-names')
a_ekeler_source = requests.get(
    'https://friendsgroupname.com/austin-ekeler-fantasy-names/').text
c_kupp_source = requests.get(
    'https://www.ranker.com/list/best-cooper-kupp-fantasy-name/pedro-cerrano')
d_henry_source = requests.get(
    'https://www.ranker.com/list/best-derrick-henry-fantasy-name/pedro-cerrano')
c_mccaffrey_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-christian-mccaffrey-fantasy-football-team')
a_kamara_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-alvin-kamara-fantasy-football-team-name-2022')
d_cook_source = requests.get(
    'https://www.sportsfeelgoodstories.com/dalvin-cook-fantasy-team-names/').text
j_jefferson_source = requests.get(
    'https://www.ranker.com/list/best-justin-jefferson-team-name/pedro-cerrano')
j_chase_source = requests.get(
    'https://www.ranker.com/list/best-jamarr-chase-fantasy-name/pedro-cerrano')
c_lamb_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/wide-receiver-names/ceedee-lamb')
s_diggs_source = requests.get(
    'https://www.ranker.com/list/best-stefon-diggs-fantasy-name/pedro-cerrano')
d_adams_source = requests.get(
    'https://www.sportskeeda.com/nfl/30-best-davante-adams-fantasy-football-names-try-2022')
d_swift_source = requests.get(
    'https://www.ranker.com/list/best-dandre-swift-fantasy-name/pedro-cerrano')
t_kelce_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/tight-end-names/travis-kelce')
m_andrews_source = requests.get(
    'https://www.sportskeeda.com/nfl/news-mark-andrews-fantasy-football-team-names')
j_mixon_source = requests.get(
    'https://www.ranker.com/list/best-joe-mixon-fantasy-name/pedro-cerrano')
m_evans_source = requests.get(
    'https://www.fanduel.com/theduel/posts/mike-evans-fantasy-football-team-names-01ga9p6ym5j5')
t_hill_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-tyreek-hill-fantasy-football-team-names')
d_samuel_source = requests.get(
    'https://www.sportskeeda.com/nfl/deebo-samuel-fantasy-football-team-names')
k_allen_source = requests.get(
    'https://www.fanduel.com/theduel/posts/keenan-allen-fantasy-football-team-names-2021-season-01fepgksvcmf')
l_fournette_source = requests.get(
    'https://flurrysports.org/leonard-fournette-fantasy-football-team-names/')
j_williams_source = requests.get(
    'https://flurrysports.org/javonte-williams-fantasy-football-team-names/')
t_mclaurin_source = requests.get(
    'https://www.ranker.com/list/best-terry-mclaurin-fantasy-name/pedro-cerrano')
d_johnson_source = requests.get(
    'https://www.drodd.com/fantasyteamname/diontae-johnson-fantasy-names.html')
a_jones_source = requests.get(
    'https://www.fanduel.com/theduel/posts/aaron-jones-fantasy-football-team-names-2021-season-01fe42v38eft')
e_elliott_source = requests.get(
    'https://flurrysports.org/ezekiel-elliott-fantasy-football-team-names/')
k_pitts_source = requests.get(
    'https://flurrysports.org/kyle-pitts-fantasy-football-team-names/')
a_brown_source = requests.get(
    'https://flurrysports.org/a-j-brown-fantasy-football-team-names/')
c_akers_source = requests.get(
    'https://www.fanduel.com/theduel/posts/cam-akers-fantasy-football-team-names-01ga9qd3frr0')
j_conner_source = requests.get(
    'https://www.fanduel.com/theduel/posts/james-conner-fantasy-football-team-names-01ga9pxxc3d5')
s_barkley_source = requests.get(
    'https://www.ranker.com/list/best-saquon-barkley-fantasy-name/pedro-cerrano')
j_allen_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/quarterback-names/josh-allen')
n_chubb_source = requests.get(
    'https://www.sportskeeda.com/nfl/news-40-nick-chubb-fantasy-football-team-names-2022')
d_metcalf_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-dk-metcalf-fantasy-football-team-names')
d_moore_source = requests.get(
    'https://www.drodd.com/fantasyteamname/dj-moore-fantasy-names.html')
j_jacobs_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/running-back-names/josh-jacobs')
c_helaire_source = requests.get(
    'https://www.fanduel.com/theduel/posts/clyde-edwards-helaire-fantasy-football-team-names-2021-season-01fepjgt4qvd')
d_waller_source = requests.get(
    'https://www.fanduel.com/theduel/posts/darren-waller-fantasy-football-team-names-2021-season-01fep5s798cc')
g_kittle_source = requests.get(
    'https://www.ranker.com/list/best-george-kittle-fantasy-name/pedro-cerrano')
c_patterson_source = requests.get(
    'https://www.fanduel.com/theduel/posts/cordarrelle-patterson-fantasy-football-team-names-2021-waiver-wire-01fg521qbqev')
t_higgins_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-tee-higgins-fantasy-football-team-names')
e_mitchell_source = requests.get(
    'https://flurrysports.org/elijah-mitchell-fantasy-football-team-names/')
j_herbert_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/quarterback-names/justin-hebert')
p_mahomes_source = requests.get(
    'https://www.ranker.com/list/best-patrick-mahomes-fantasy-name/pedro-cerrano')
j_waddle_source = requests.get(
    'https://flurrysports.org/jaylen-waddle-fantasy-football-team-names/')
l_jackson_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-lamar-jackson-fantasy-football-team-names')
j_hurts_source = requests.get(
    'https://www.ranker.com/list/best-jalen-hurts-fantasy-name/pedro-cerrano')
k_murray_source = requests.get(
    'https://www.drodd.com/fantasyteamname/kyler-murray-fantasy-team-names.html')
j_goff_source = requests.get(
    'https://www.drodd.com/fantasyteamname/jared-goff-fantasy-names.html')
j_burrow_source = requests.get(
    'https://www.ranker.com/list/best-joe-burrow-fantasty-name/pedro-cerrano')
t_tagovailoa_source = requests.get(
    'https://www.ranker.com/list/best-tua-tagovailoa-fantasy-name/pedro-cerrano')
t_brady_source = requests.get(
    'https://www.sportskeeda.com/nfl/tom-brady-fantasy-football-team-names-cool-funny-ideas-2022')
am_brown_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/wide-receiver-names/amon-ra-st-brown')
k_hunt_source = requests.get(
    'https://flurrysports.org/kareem-hunt-fantasy-football-team-names/')
j_robinson_source = requests.get(
    'https://www.fanduel.com/theduel/posts/james-robinson-fantasy-football-team-names-01ek2t9p4b49')
t_hockenson_source = requests.get(
    'https://flurrysports.org/t-j-hockenson-fantasy-football-team-names/')
g_pickens_source = requests.get(
    'https://flurrysports.org/george-pickens-fantasy-football-team-names/')
namesDic = {"names": {}}  # dictionary with name as key, array of nicknames as value
loadedDictionary = {}
counter = 1
'''
Function to add values to
dictionary when website is
ranker
'''


def addRankerPlayer(source, playerName):
    global counter
    
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

    namesDic["names"].update({playerName : {}})
    namesDic["names"][playerName]['name'] = playerName
    namesDic["names"][playerName]['nicknames'] = []
    namesDic["names"][playerName]['key'] = counter
    namesDic["names"][playerName]['team'] = ""
    namesDic["names"][playerName]['number'] = 00
    namesDic["names"][playerName]['type'] = ""
    nicknameTags = soup.find_all("h2", class_="listItem_name__Qq_Y8")
    for nicknames in nicknameTags:
        nickname = nicknames.text
        nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
        if (nickname != ""):
            namesDic["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add values to
dictionary when website is
Sportkeeda
'''


def addSportkeedaPlayer(source, playerName):
    global counter
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    namesDic["names"].update({playerName : {}})
    namesDic["names"][playerName]['name'] = playerName
    namesDic["names"][playerName]['nicknames'] = []
    namesDic["names"][playerName]['key'] = counter
    namesDic["names"][playerName]['team'] = ""
    namesDic["names"][playerName]['number'] = 00
    namesDic["names"][playerName]['type'] = ""
    nicknameTags = soup.find_all('li', class_=None, id=None)
    for nicknames in nicknameTags:
        nickname = nicknames.text
        if '.' in nickname:
            nickname = nickname.strip(nickname[-1])
        nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
        if (nickname != ""):
            namesDic["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add values to
dictionary when website is
cheat sheet
'''


def addCheatSheetPlayer(source, playerName):
    global counter
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    namesDic["names"].update({playerName : {}})
    namesDic["names"][playerName]['name'] = playerName
    namesDic["names"][playerName]['nicknames'] = []
    namesDic["names"][playerName]['key'] = counter
    namesDic["names"][playerName]['team'] = ""
    namesDic["names"][playerName]['number'] = 00
    namesDic["names"][playerName]['type'] = ""
    nicknameTags = soup.find_all("span", class_="auton")
    for nicknames in nicknameTags:
        nickname = nicknames.text
        nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
        if (nickname != ""):
            namesDic["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add players from
FanDual website
'''


def addFanDualPlayer(source, playerName):
    global counter
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    namesDic["names"].update({playerName : {}})
    namesDic["names"][playerName]['name'] = playerName
    namesDic["names"][playerName]['nicknames'] = []
    namesDic["names"][playerName]['key'] = counter
    namesDic["names"][playerName]['team'] = ""
    namesDic["names"][playerName]['number'] = 00
    namesDic["names"][playerName]['type'] = ""
    nicknameTags = soup.find_all("h2", {"data-mm-id": True})
    for index, nicknames in enumerate(nicknameTags):
        if (index > 1):  # skip first two results
            nickname = nicknames.text
            # find period to remove the number for e/ nickname
            nickname = nickname[nickname.index('.') + 1:]
            nickname = nickname.strip()
            nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
            if (nickname != ""):
                namesDic["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to add players from
Flurry Sports website
'''


def addFlurrySportsPlayer(source, playerName):
    global counter
    source = source.text
    soup = BeautifulSoup(source, 'lxml')
    namesDic["names"].update({playerName : {}})
    namesDic["names"][playerName]['name'] = playerName
    namesDic["names"][playerName]['nicknames'] = []
    namesDic["names"][playerName]['key'] = counter
    namesDic["names"][playerName]['team'] = ""
    namesDic["names"][playerName]['number'] = 00
    namesDic["names"][playerName]['type'] = ""
    playerHeading = soup.find("ul", class_=None)
    nicknames = playerHeading.find_all("li")
    for nickname in nicknames:
        nickname = nickname.text
        nickname = nickname.strip('\n')
        nickname = nickname.replace('\n', '')
        if (nickname != ""):
            namesDic["names"][playerName]['nicknames'].append([nickname, 0])
    counter = counter + 1


'''
Function to group players whose nicknames
comes from websites that are only used once
'''


def addOtherPlayers():
    global counter
    # AE
    soup = BeautifulSoup(a_ekeler_source, 'lxml')
    namesDic["names"].update({'Austin Ekeler': {}})
    namesDic["names"]['Austin Ekeler']['name'] = 'Austin Ekeler'
    namesDic["names"]['Austin Ekeler']['nicknames'] = []
    namesDic["names"]['Austin Ekeler']['key'] = counter
    namesDic["names"]['Austin Ekeler']['team'] = ""
    namesDic["names"]['Austin Ekeler']['number'] = 00
    namesDic["names"]['Austin Ekeler']['type'] = ""
    nicknameTags = soup.find_all('li', class_=None, id=None)
    for index, nicknames in enumerate(nicknameTags):
        if (index < 26):
            nickname = nicknames.text
            nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
            if (nickname != ""):
                namesDic["names"]['Austin Ekeler']['nicknames'].append([nickname, 0])
    counter = counter + 1

    # DC
    soup = BeautifulSoup(d_cook_source, 'lxml')
    namesDic["names"].update({'Dalvin Cook': {}})
    namesDic["names"]['Dalvin Cook']['name'] = 'Dalvin Cook'
    namesDic["names"]['Dalvin Cook']['nicknames'] = []
    namesDic["names"]['Dalvin Cook']['key'] = counter
    namesDic["names"]['Dalvin Cook']['team'] = ""
    namesDic["names"]['Dalvin Cook']['number'] = 00
    namesDic["names"]['Dalvin Cook']['type'] = ""
    nicknameTags = soup.find_all('strong', class_=None, id=None)
    for index, nicknames in enumerate(nicknameTags):
        if (index < 23):
            nickname = nicknames.text
            # find index of parenthesis and slice to end
            nickname = nickname[nickname.index(')') + 1:]
            nickname = nickname.strip()
            if (nickname[-1] == "."):
                nickname = nickname[:-1]  # remove period if present
            nickname = re.sub(r'[^\x00-\x7F]+', "'", nickname)
            if (nickname != ""):
                namesDic["names"]["Dalvin Cook"]['nicknames'].append([nickname, 0])
    counter = counter + 1


def addPlayersToDictionary():
    addSportkeedaPlayer(j_taylor_source, "Johnathan Taylor")
    addSportkeedaPlayer(n_harris_source, "Najee Harris")
    addRankerPlayer('https://www.ranker.com/list/best-cooper-kupp-fantasy-name/pedro-cerrano', "Cooper Kupp")
    addRankerPlayer('https://www.ranker.com/list/best-derrick-henry-fantasy-name/pedro-cerrano', "Derrick Henry")
    addSportkeedaPlayer(c_mccaffrey_source, "Christian McCaffrey")
    addSportkeedaPlayer(a_kamara_source, "Alvin Kamara")
    addRankerPlayer('https://www.ranker.com/list/best-jamarr-chase-fantasy-name/pedro-cerrano', "Ja'Marr Chase")
    addCheatSheetPlayer(c_lamb_source, "CeeDee Lamb")
    addRankerPlayer('https://www.ranker.com/list/best-stefon-diggs-fantasy-name/pedro-cerrano', "Stefon Diggs")
    addSportkeedaPlayer(d_adams_source, "Davante Adams")
    addRankerPlayer('https://www.ranker.com/list/best-dandre-swift-fantasy-name/pedro-cerrano', "D'Andre Swift")
    addCheatSheetPlayer(t_kelce_source, "Travis Kelce")
    addSportkeedaPlayer(m_andrews_source, "Mark Andrews")
    addRankerPlayer('https://www.ranker.com/list/best-joe-mixon-fantasy-name/pedro-cerrano', "Joe Mixon")
    addFanDualPlayer(m_evans_source, "Mike Evans")
    addSportkeedaPlayer(t_hill_source, "Tyreek Hill")
    addSportkeedaPlayer(d_samuel_source, "Deebo Samuel")
    addFanDualPlayer(k_allen_source, "Keenan Allen")
    addFlurrySportsPlayer(l_fournette_source, "Leonard Fournette")
    addRankerPlayer('https://www.ranker.com/list/best-terry-mclaurin-fantasy-name/pedro-cerrano', "Terry McLaurin")
    addFlurrySportsPlayer(d_johnson_source, "Diontae Johnson")
    addFanDualPlayer(a_jones_source, "Aaron Jones")
    addFlurrySportsPlayer(e_elliott_source, "Ezekiel Elliott")
    addFlurrySportsPlayer(k_pitts_source, "Kyle Pitts")
    addFlurrySportsPlayer(a_brown_source, "AJ Brown")
    addFanDualPlayer(c_akers_source, "Cam Akers")
    addFanDualPlayer(j_conner_source, "James Conner")
    addRankerPlayer('https://www.ranker.com/list/best-saquon-barkley-fantasy-name/pedro-cerrano', "Saquon Barkley")
    addCheatSheetPlayer(j_allen_source, "Josh Allen")
    addSportkeedaPlayer(n_chubb_source, "Nick Chubb")
    addSportkeedaPlayer(d_metcalf_source, "DK Metcalf")
    addFlurrySportsPlayer(d_moore_source, "DJ Moore")
    addCheatSheetPlayer(j_jacobs_source, "Josh Jacobs")
    addFanDualPlayer(c_helaire_source, "Clyde Edwards-Helaire")
    addFanDualPlayer(d_waller_source, "Darren Waller")
    addRankerPlayer('https://www.ranker.com/list/best-george-kittle-fantasy-name/pedro-cerrano', "George Kittle")
    addFanDualPlayer(c_patterson_source, "Cordarrelle Patterson")
    addSportkeedaPlayer(t_higgins_source, "Tee Higgins")
    addFlurrySportsPlayer(e_mitchell_source, "Elijah Mitchell")
    addCheatSheetPlayer(j_herbert_source, "Justin Herbert")
    addRankerPlayer('https://www.ranker.com/list/best-patrick-mahomes-fantasy-name/pedro-cerrano', "Patrick Mahomes")
    addFlurrySportsPlayer(j_waddle_source, "Jaylen Waddle")
    addSportkeedaPlayer(l_jackson_source, "Lamar Jackson")
    addRankerPlayer('https://www.ranker.com/list/best-jalen-hurts-fantasy-name/pedro-cerrano', "Jalen Hurts")
    addFlurrySportsPlayer(k_murray_source, "Kyler Murray")
    addFlurrySportsPlayer(j_goff_source, "Jared Goff")
    addRankerPlayer('https://www.ranker.com/list/best-joe-burrow-fantasty-name/pedro-cerrano', "Joe Burrow")
    addRankerPlayer('https://www.ranker.com/list/best-tua-tagovailoa-fantasy-name/pedro-cerrano', "Tua Tagovailoa")
    addSportkeedaPlayer(t_brady_source, "Tom Brady")
    addCheatSheetPlayer(am_brown_source, "Amon-Ra St. Brown")
    addFlurrySportsPlayer(k_hunt_source, "Kareem Hunt")
    addFanDualPlayer(j_robinson_source, "James Robinson")
    addFlurrySportsPlayer(t_hockenson_source, "TJ Hockenson")
    addFlurrySportsPlayer(g_pickens_source, "George Pickens")
    addOtherPlayers()


def createJSONFile():
    namesJSON = json.dumps(namesDic, indent=4)
    with open("fantasy-nicknames-new.json", "w") as outfile:
        json.dump(namesJSON, outfile)
    print(namesJSON)

def loadJSONFile():
    with open('fantasy-nicknames-new.json') as json_file:
        loadedDictionary = json.load(json_file)

def main():
    addPlayersToDictionary()
    #createJSONFile()
    #loadJSONFile()


main()
