module.exports = {
  someSidebar: {
    Installation: ["get-started"],
    API: [
      {
        Database: [
          "new-database",
          "db-put",
          "db-get",
          "db-del",
          "db-batch",
          "db-iterator",
          "db-compact-range",
          "db-get-snapshot",
          "db-release-snapshot",
          "db-close",
        ],
      },
      { DBRepairer: ["new-dbrepairer", "dbrepairer-run"] },
      { WriteBatch: ["new-write-batch"] },
    ],
  },
};
