report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test_0_document_0_tablet_h.png",
        "test": "../bitmaps_test/20190416-091319/test_test_0_document_0_tablet_h.png",
        "selector": "document",
        "fileName": "test_test_0_document_0_tablet_h.png",
        "label": "test",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://host.docker.internal:8080",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "test"
});