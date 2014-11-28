{"filter":false,"title":"network.js","tooltip":"/client/js/network.js","undoManager":{"mark":30,"position":30,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":74,"column":0},"action":"insert","lines":["/**"," * NETWORK"," *"," * The network service is used to communicate with the Ripple network."," *"," * It encapsulates a ripple.Remote instance."," */","","var module = angular.module('network', []);","","module.factory('rpNetwork', ['$rootScope', function($scope)","{","  /**","   * Manage network state.","   *","   * This class is intended to manage the connection status to the","   * Ripple network.","   *","   * Note that code in other places *is allowed* to call the Ripple","   * library directly. This is not to be intended to be an abstraction","   * layer on top of an abstraction layer.","   */","  var Network = function ()","  {","    this.remote = new ripple.Remote(Options.server, true);","    this.remote.on('connected', this.handleConnect.bind(this));","    this.remote.on('disconnected', this.handleDisconnect.bind(this));","","    // Set network max transaction fee from Options, or default to 12 drops of XRP","    this.remote.max_fee = Options.max_tx_network_fee || 12;","","    this.connected = false;","  };","","  Network.prototype.init = function ()","  {","    this.remote.connect();","  };","","  /**","   * Setup listeners for identity state.","   *","   * This function causes the network object to start listening to","   * changes in the identity state and automatically subscribe to","   * accounts accordingly.","   */","  Network.prototype.listenId = function (id)","  {","    var self = this;","  };","","  Network.prototype.handleConnect = function (e)","  {","    var self = this;","    $scope.$apply(function () {","      self.connected = true;","      $scope.connected = true;","      $scope.$broadcast('$netConnected');","    });","  };","","  Network.prototype.handleDisconnect = function (e)","  {","    var self = this;","    $scope.$apply(function () {","      self.connected = false;","      $scope.connected = false;","      $scope.$broadcast('$netDisconnected');","    });","  };","","  return new Network();","}]);","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":0},"end":{"row":31,"column":27},"action":"remove","lines":["","    // Set network max transaction fee from Options, or default to 12 drops of XRP","    this.remote.max_fee = Options.max_tx_network_fee || 12;","","    this.connected = false;"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":0},"end":{"row":65,"column":4},"action":"remove","lines":["  /**","   * Setup listeners for identity state.","   *","   * This function causes the network object to start listening to","   * changes in the identity state and automatically subscribe to","   * accounts accordingly.","   */","  Network.prototype.listenId = function (id)","  {","    var self = this;","  };","","  Network.prototype.handleConnect = function (e)","  {","    var self = this;","    $scope.$apply(function () {","      self.connected = true;","      $scope.connected = true;","      $scope.$broadcast('$netConnected');","    });","  };","","  Network.prototype.handleDisconnect = function (e)","  {","    var self = this;","    $scope.$apply(function () {","      self.connected = false;","      $scope.connected = false;","      $scope.$broadcast('$netDisconnected');","    });","  };"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":43},"end":{"row":24,"column":50},"action":"remove","lines":[".server"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":42},"end":{"row":24,"column":43},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":41},"end":{"row":24,"column":42},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":40},"end":{"row":24,"column":41},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":39},"end":{"row":24,"column":40},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":38},"end":{"row":24,"column":39},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":37},"end":{"row":24,"column":38},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"remove","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":38},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":37},"end":{"row":24,"column":64},"action":"insert","lines":[" 'wss://s1.ripple.com:443' "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"insert","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":37},"end":{"row":24,"column":38},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":37},"end":{"row":24,"column":38},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"remove","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":37},"end":{"row":24,"column":38},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":38},"end":{"row":24,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":39},"end":{"row":24,"column":40},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":40},"end":{"row":24,"column":41},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":41},"end":{"row":24,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":42},"end":{"row":24,"column":43},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":43},"end":{"row":24,"column":44},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":44},"end":{"row":24,"column":45},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":74},"end":{"row":24,"column":75},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":1},"end":{"row":26,"column":69},"action":"remove","lines":["   this.remote.on('connected', this.handleConnect.bind(this));","    this.remote.on('disconnected', this.handleDisconnect.bind(this));"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":83},"end":{"row":25,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":32,"column":0},"end":{"row":32,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1417014902302,"hash":"993ab9111648f47cd73d2847949fc37749637ebb"}