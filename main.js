var app = angular.module('myApp', ['ngMdIcons']);
app.controller('userTable', ['$scope',
    function($scope) {
        $scope.active = true;
        $scope.tables = [{
            "label": "Users",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Orders",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 1",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 2",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 3",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 4",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 5",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 6",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 7",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }, {
            "label": "Table 8",
            "color": "red",
            "children": [{
                "label1": "Column",
                "label2": "Type",
                "label3": "Sample Data",
                "children": [{
                    "label1": "Order_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Product_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Customer_id",
                    "label2": "Int",
                    "label3": "1,2,3,4,5"
                }, {
                    "label1": "Shipping_type",
                    "label2": "varchar",
                    "label3": "FedEx, UPS, USPS"
                }]
            }]
        }];
    }
]);