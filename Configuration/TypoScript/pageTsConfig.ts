tx_gridelements {
  overruleRecords = 1
  setup {
    mastergrid {
      title = Container mit voller Breite und Hintergrund
      description = Definiert einen Container mit voller Breite und einer Hintergrundfarbe bzw. einem Hintergrundbild. (Beispiele: weiß mit Logo, graue Blasen)
      icon = ../typo3conf/ext/tgm_grids/Resources/Public/Images/Icons/mastergrid.png
      frame = 3
      topLevelLayout = 1
      config {
        colCount = 1
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name =
                colPos = 20
              }
            }
          }
        }
      }
      flexformDS = FILE:EXT:tgm_grids/Configuration/Flexforms/mastergrid-flexform.xml
    }
    2col-50-50 {
      title = Container mit 2 Spalten (50|50)
      description = Einfacher Container mit 2 gleich großen Spalten
      icon = ../typo3conf/ext/tgm_grids/Resources/Public/Images/Icons/50-50.png
      frame =
      topLevelLayout = 0
      config {
        colCount = 2
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = linke Spalte
                colPos = 20
              }
              2 {
                name = rechte Spalte
                colPos = 21
              }
            }
          }
        }
      }
      flexformDS =
    }
    2col-25-75 {
      title = Container mit 2 Spalten (25|75)
      description = Einfacher Container mit 2 Spalten (25 % | 75 %)
      icon =
      frame =
      topLevelLayout = 0
      config {
        colCount = 4
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = linke Spalte
                colPos = 20
              }
              2 {
                name = rechte Spalte
                colPos = 21
                colspan = 3
              }
            }
          }
        }
      }
      flexformDS =
    }
    2col-33-67 {
      title = Container mit 2 Spalten (33|67)
      description = Einfacher Container mit 2 Spalten (33 % | 67 %)
      icon =
      frame =
      topLevelLayout = 0
      config {
        colCount = 3
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = linke Spalte
                colPos = 20
              }
              2 {
                name = rechte Spalte
                colPos = 21
                colspan = 2
              }
            }
          }
        }
      }
      flexformDS =
    }
    2col-67-33 {
      title = Container mit 2 Spalten (67|33)
      description = Einfacher Container mit 2 Spalten (67 % | 33 %)
      icon =
      frame =
      topLevelLayout = 0
      config {
        colCount = 3
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = linke Spalte
                colPos = 20
                colspan = 2
              }
              2 {
                name = rechte Spalte
                colPos = 21
              }
            }
          }
        }
      }
      flexformDS =
    }
    3col-25-50-25 {
      title = Container mit 3 Spalten (25|50|25)
      description = Container mit 3 Spalten (25 % | 50 % | 25 %)
      icon =
      frame =
      topLevelLayout = 0
      config {
        colCount = 4
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = Spalte 1
                colPos = 20
              }
              2 {
                name = Spalte 2
                colPos = 21
                colspan = 2
              }
              3 {
                name = Spalte 3
                colPos = 22
              }
            }
          }
        }
      }
      flexformDS =
    }
    4col-25-25-25-25 {
      title = Container mit 4 Spalten (25|25|25|25)
      description = Container mit 4 Spalten (25 % | 25 % | 25 % | 25 %)
      icon =
      frame =
      topLevelLayout = 0
      config {
        colCount = 4
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = Spalte 1
                colPos = 20
              }
              2 {
                name = Spalte 2
                colPos = 21
              }
              3 {
                name = Spalte 3
                colPos = 22
              }
              4 {
                name = Spalte 4
                colPos = 23
              }
            }
          }
        }
      }
      flexformDS =
    }
  }
}