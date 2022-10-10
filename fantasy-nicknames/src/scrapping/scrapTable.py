from ctypes import addressof
from tkinter.font import names
from bs4 import BeautifulSoup
import requests
import json
import re

table_source = requests.get(
    'https://fantasydata.com/nfl/fantasy-football-leaders?season=2022&seasontype=1&scope=1&subscope=1&aggregatescope=1&range=3')

print(table_source)
