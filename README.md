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

And in the other scripts use the following for logger, (Theme Bootstrap)
```javascript

Logger.success(var1,var2,...,varN);
Logger.info(var1,var2,...,varN);
Logger.warning(var1,var2,...,varN);
Logger.danger(var1,var2,...,varN);


```
