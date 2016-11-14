# Logger.js

Control logs for production systems and development.

## Usage

Include in the main script the following (enable or disable logs)
```javascript
//For production systems
Logger.disableLog();
//For development systems (Default)
Logger.enableLog();
```

And in the other scripts use the following for logger
```javascript

Logger.success(var1,var2,...,varN);
Logger.info(var1,var2,...,varN);
Logger.warn(var1,var2,...,varN);
Logger.error(var1,var2,...,varN);


```
